import { Button, Container, FormGroup, TextField } from '@mui/material';
import {SyntheticEvent, useState} from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';


const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();
        try{
          const response:any = await axios.post('http://localhost:5000/api/psychologists/register', 
          {
            firstName,
            lastName,
            email,
            password
          }
        )
        if(response.data){
          alert(JSON.stringify(response.data.message))
        }
        if(response.message){
          return alert('Email already exists')
        }
        setRedirect(true)
          } catch(error:any) {
            alert(error)
          }
    }

  if(redirect){
    return <Navigate to="/login" />
  }

  return (
    <Container>
      <br/>
      <br/>
      <br/>
      <h2>Please complete all fields to register</h2>
    <FormGroup>
        <TextField
          required
          margin='normal'
          id='firstName'
          label="First name"
          value={firstName}
          onChange={(Event) => setFirstName(Event.target.value)}
        />
        <TextField
          required
          margin='normal'
          id='lastName'
          label="Last name"
          value={lastName}
          onChange={(Event) => setLastName(Event.target.value)}
        />
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
          error={!regex.test(password) && password !== ''}
          helperText={
            <>
              At least 8 characters
              <br/>
              Contain at least one lowercase letter
              <br/>
              Contain at least one uppercase letter
              <br/>
              Contain at least one number
              <br/>
              Contain at least one special character
            </>
          }
          margin='normal'
          id='password'
          label="Password"
          value={password}
          onChange={(Event) => setPassword(Event.target.value)}
        />
        <TextField
          required
          error={confirmPassword !== password && confirmPassword !== ''}
          helperText='Must match password'
          margin='normal'
          id='confirmPassword'
          label="Confirm password"
          value={confirmPassword}
          onChange={(Event) => setConfirmPassword(Event.target.value)}
        />
        <Button variant="contained" onClick={(e)=>{submit(e)}}>Submit</Button>
      </FormGroup>
      </Container>
  )
}

export default RegisterForm