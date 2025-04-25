import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AppBar, Button, Toolbar, useScrollTrigger } from '@mui/material'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useDispatch } from 'react-redux';
import { setAuth } from '../app/authSlice';

function ElevationScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

const Navbar = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    if(sessionStorage.user){
      dispatch(setAuth(true))
    }
  });


  const auth:boolean = useSelector((state:RootState) => state.auth.value)

  const logout = async () => {
    window.sessionStorage.clear();
    localStorage.clear();
    dispatch(setAuth(false));
    return <Navigate to="/" />;
  }

  return (
    <ElevationScroll>
    <AppBar>
      <Toolbar>
        {!auth && <Link to="/">
          <Button variant='contained' disableElevation>Home</Button>
        </Link>}
        {!auth && <Link to="/Login">
          <Button variant='contained' disableElevation>Login</Button>
        </Link>}
        {!auth && <Link to="/Register">
          <Button variant='contained' disableElevation>Register</Button>
        </Link>}
        {auth && <Link to='/nameAndDate'>
          <Button variant='contained'>New report</Button>
        </Link>}
        {auth && <Link to="/ViewReportsPage">
          <Button variant='contained'>View reports</Button>
        </Link>}
        {auth && <Link to="/ViewSubjectsPage">
          <Button variant='contained'>View subjects</Button>
        </Link>}
        {auth && <Link to="/" onClick={ logout}>
        <Button variant='contained' disableElevation>Logout</Button>
        </Link>}
      </Toolbar>
    </AppBar>
    </ElevationScroll>
  )
}

export default Navbar