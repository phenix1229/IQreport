
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridEventListener, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setReports } from '../app/reportsSlice';
import { setReport } from '../app/reportSlice';
import { RootState } from '../app/store';
import { Container } from '@mui/material';



const columns: GridColDef<(typeof rows)[number]>[] = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 220 },
  {
    field: 'subjectLastName',
    headerName: 'Subject',
    width: 150,
  },
  {
    field: 'psychologistLastName',
    headerName: 'Psychologist',
    width: 150,
  },
  {
    field: 'testDate',
    headerName: 'Evaluation Date',
    width: 200,
  },
  {
    field: 'subjectEmail',
    headerName: 'Subject Email',
    sortable: false,
    width: 260,
  }
];



const customToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  )
}
const rows:any = [];

export default function ReportsViewer() {
const [redirect, setRedirect] = useState(false)
const dispatch = useDispatch();
let reports:any = useSelector((state:RootState) => state.reports.reports);

useEffect(() => {
    (async ()=> { 
        try{
            await axios.get(`http://localhost:5000/api/reports/all`)
        .then((response:any) => {
            const stringData:any = JSON.stringify(response.data)
            const editData =stringData.replaceAll("_id","id")
            dispatch(setReports(JSON.parse(editData)))
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        } catch(error){}    
    })();
}, []);

  
  const rowClicked: GridEventListener<'rowClick'> = async (params) => {
    dispatch(setReport(reports.find((report:any) => report.id === `${params.row.id}`)))
    setRedirect(true)
  };


  if(redirect){
    return <Navigate to="/writtenReportPage" />
  }

  
  return (
    <Container>
        <h2>All* reports are displayed by default, please use filters to customize your view</h2>
    <Box sx={{ height: 400, width: '100%' }}>
        <br/>
        <br/>
      <DataGrid
        rows={reports}
        columns={columns}
        onRowClick={rowClicked}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        slots={{toolbar:customToolbar}}
      />
    </Box>
    </Container>
  );
}