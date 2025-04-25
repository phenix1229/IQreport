import {SyntheticEvent, useState} from 'react'
import { Button, Container, FormControl, FormGroup, TextField } from '@mui/material'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../app/userSlice';
import { setAuth } from '../app/authSlice';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  const submit = async (e:SyntheticEvent) => {
    e.preventDefault();
    try{
    const response:any = await axios.post('http://localhost:5000/api/psychologists/login', {
      email,
      password
    }, {withCredentials:true})
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    dispatch(setUser({
        firstName:response.data.psychologist.firstName,
        lastName:response.data.psychologist.lastName,
        email:response.data.psychologist.email
      }
    ))
    dispatch(setAuth(true))
    setRedirect(true)
    } catch(error:any){
      alert(error.response.data.message)
    }
  }

  if(redirect){
      return <Navigate to="/userHome" />
  }

  return (
    <Container>
    <h2>Please log in</h2>
    <FormControl>
      <FormGroup>
      <TextField
        required
        margin='normal'
        id='email'
        label="Email"
        value={email}
        onChange={(Event) => setEmail(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='password'
        label="Password"
        value={password}
        onChange={(Event) => setPassword(Event.target.value)}
      />
      <Button variant="contained" onClick={(e)=>{submit(e)}}>Submit</Button>
      </FormGroup>
    </FormControl>
    </Container>
  )
}

export default LoginForm