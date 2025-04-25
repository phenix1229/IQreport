
import { Box, Button, Container, FormControl, Grid2, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import '../interceptors/axios'
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid'
import { setReports } from '../app/reportsSlice'
import { setReport } from '../app/reportSlice'
import axios from 'axios'
import { setAuth } from '../app/authSlice'

const ViewSubject = () => {

  const [redirect, setRedirect] = useState('')
  const dispatch = useDispatch();
  const selectedSubject:any = useSelector((state:RootState) => state.selectedSubject.subject)
  let reports:any = useSelector((state:RootState) => state.reports.reports)

  useEffect(() => {
        (async ()=> { 
          try{
            await axios.get(`http://localhost:5000/api/reports/allSubjectReports/${selectedSubject.email}`)
          .then((response:any) => {
            const stringData:any = JSON.stringify(response.data)
            const editData =stringData.replaceAll("_id","id")
            dispatch(setReports(JSON.parse(editData)))
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
          const dispatch = useDispatch();
          if(sessionStorage.user){
            dispatch(setAuth(true))
          }
        } catch(error){}
      }
    )();
  }, []);

  const auth:boolean = useSelector((state:RootState) => state.auth.value)

  const Item = (label:string, id:string, value:string) => {
    return (
      <TextField sx={{width:'100%'}}
        disabled
        margin='normal'
        id={id}
        label={label}
        value={value}
      />
    )
  }

  const rows:any = [];

  const columns: GridColDef<(typeof rows)[number]>[] = [
      { 
        field: 'id', 
        headerName: 'Report ID', 
        width: 300
      },
      {
        field: 'testDate',
        headerName: 'Report Date',
        width: 100
      }
  ];

  const rowClicked: GridEventListener<'rowClick'> = async (params) => {
    dispatch(setReport(reports.find((report:any) => report.id === `${params.row.id}`)))
    localStorage.setItem('reportNumber',`${params.row.reportNumber}`)
    setRedirect('viewReport')
  };

  if(redirect === 'back'){
    return (<Navigate to={'/viewSubjectsPage'} />)
  }

  if(redirect === 'viewReport'){
    return (<Navigate to={'/writtenReportPage'} />)
  }
  
  if(!auth){
    return (
      <h2>Access denied</h2>
    )
  }

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Container sx={{width:'100%'}}>
      <h2>Subject</h2>
      <Grid2 container rowSpacing={1} columnSpacing={1}>
        <Grid2 size={3}>
          {Item('ID', 'id', selectedSubject.id)}
        </Grid2>
        <Grid2 size={3}>
          {Item('First name', 'firstName', selectedSubject.firstName)}
        </Grid2>
        <Grid2 size={3}>
          {Item('Last name', 'lastName', selectedSubject.lastName)}
        </Grid2>
        <Grid2 size={3}>
          {Item('Email', 'email', selectedSubject.email)}
        </Grid2>
        <Grid2 size={5}>
          <Container>
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
              />
            </Box>
          </Container>
        </Grid2>
      </Grid2>
        </Container>
          <FormControl>
            <Button variant='contained' onClick={() => {setRedirect('back')}}>Back</Button>
          </FormControl>
    </div>
  )
}

export default ViewSubject