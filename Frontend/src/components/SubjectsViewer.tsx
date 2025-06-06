
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridEventListener, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSubjects } from '../app/subjectsSlice';
import { setSelectedSubject } from '../app/selectedSubjectSlice';
import { RootState } from '../app/store';
import { Container } from '@mui/material';

const columns: GridColDef<(typeof rows)[number]>[] = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 220 },
    { 
        field: 'firstName', 
        headerName: 'First Name', 
        width: 220 },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 220,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 150,
    },
    {
        field: 'reports',
        headerName: 'Reports',
        width: 200,
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

export default function SubjectsViewer() {
const [redirect, setRedirect] = useState(false)
const dispatch = useDispatch();
let subjects:any = useSelector((state:RootState) => state.subjects.subjects);

useEffect(() => {
  (async ()=> { 
    try{
      await axios.get('http://localhost:5000/api/subjects/all')
    .then((response:any) => {
      const stringData:any = JSON.stringify(response.data)
      const editData =stringData.replaceAll("_id","id")
      dispatch(setSubjects(JSON.parse(editData)))
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    } catch(error){}
  }
  )();
  }, []);

  const rowClicked: GridEventListener<'rowClick'> = async (params) => {
    dispatch(setSelectedSubject(subjects.find((subject:any) => subject.email === `${params.row.email}`)))
    setRedirect(true)
  };

  if(redirect){
    return <Navigate to="/viewSubject" />
  }
  
  return (
    <Container>
        <h2>All* subjects are displayed by default, please use filters to customize your view</h2>
    <Box sx={{ height: 400, width: '100%' }}>
        <br/>
        <br/>
      <DataGrid
        rows={subjects}
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