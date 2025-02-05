import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AppBar, Button, Toolbar, useScrollTrigger } from '@mui/material'

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

    const auth:boolean = false;

  const logout = async () => {
    window.sessionStorage.clear()
    return <Navigate to="/" />
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
        {auth && <Link to="/" onClick={ logout}>
        <Button variant='contained' disableElevation>Logout</Button>
        </Link>}
      </Toolbar>
    </AppBar>
    </ElevationScroll>
  )
}

export default Navbar