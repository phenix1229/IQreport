
import { Box, Button, Container, FormControl, Grid2, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import '../interceptors/axios'
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid'
import { fillRows } from '../frontendUtilities/utilities'
import { setReport } from '../app/reportSlice'
// import UpdateUserForm from '../components/UpdateUserForm'

const ViewSubject = () => {
  const [editing, setEditing] = useState(false)
  const [redirect, setRedirect] = useState('')
  const dispatch = useDispatch();
  const selectedSubject:any = useSelector((state:RootState) => state.selectedSubject.subject)
  let reports:any = useSelector((state:RootState) => state.reports.reports)

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
        headerName: 'Number', 
        width: 100
      },
      {
        field: 'reportNumber',
        headerName: 'Report ID',
        width: 300
      }
  ];

  const rowClicked: GridEventListener<'rowClick'> = async (params) => {
    dispatch(setReport(reports.find((report:any) => report._id === `${params.row.reportNumber}`)))
    localStorage.setItem('reportNumber',`${params.row.reportNumber}`)
    setRedirect('viewReport')
  };


  if(redirect === 'back'){
    return (<Navigate to={'/viewSubjectsPage'} />)
  }
  
  // if(redirect === 'edit'){
  //   return (<Navigate to={'/AddComment'} />)
  // }

  if(redirect === 'viewReport'){
    return (<Navigate to={'/writtenReportPage'} />)
  }

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      {!editing && <Container sx={{width:'100%'}}>
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
                rows={fillRows(selectedSubject.reports)}
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
        </Container>}
        {/* {editing === true && (
            <UpdateUserForm />
        )} */}
        {/* <Container>
            <Button variant='contained' style={{marginBottom:"8px"}} onClick={() => {setEditing(!editing)}}>{editing === false ? 'Edit user' : 'Cancel'}</Button>
          </Container> */}
          {editing === false && (<FormControl>
            <Button variant='contained' onClick={() => {setRedirect('back')}}>Back</Button>
          </FormControl>)}

    </div>
  )
}

export default ViewSubject