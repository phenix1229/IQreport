import { Box, Button, Container } from '@mui/material'
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { RootState } from '../app/store';

const UserOptions = () => {
//   const user:any = useSelector((state:RootState) => state.user.user)

  return (
    <Container>
      <h3>{`Welcome`}</h3> 
      <br/>
      <br/>
      <br/>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Link to='/nameAndDate'>
        <Button variant='contained'>New report</Button>
      </Link>
      <Link to="/ViewAllTickets">
        <Button variant='contained'>View reports</Button>
      </Link>
      <Link to="/ViewAllUsers">
        <Button variant='contained'>View subjects</Button>
      </Link>
      </Box>
    </Container>
  )
}

export default UserOptions