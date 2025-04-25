import { Container } from '@mui/material'
import UserOptions from '../components/UserOptions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../app/authSlice';
import { RootState } from '../app/store';

const UserHome = () => {

  const dispatch = useDispatch();
      
  useEffect(()=>{
    if(sessionStorage.user){
      dispatch(setAuth(true))
    }
  });

  const auth:boolean = useSelector((state:RootState) => state.auth.value)

  if(!auth){
    return (
      <h2>Access denied</h2>
    )
  }

  return (
    <Container>
      <UserOptions />
    </Container>
  )
}

export default UserHome