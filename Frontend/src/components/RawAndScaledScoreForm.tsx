import {SyntheticEvent, useState} from 'react'
import { Button, Container, FormControl, FormGroup, TextField } from '@mui/material'
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const ScoreForm = () => {
  
  const [bdRawScore, setBdRawScore] = useState('');
  const [bdScaledScore, setBdScaledScore] = useState('')
  const [siRawScore, setSiRawScore] = useState('');
  const [siScaledScore, setSiScaledScore] = useState('')
  const [mrRawScore, setMrRawScore] = useState('');
  const [mrScaledScore, setMrScaledScore] = useState('')
  const [dsRawScore, setDsRawScore] = useState('');
  const [dsScaledScore, setDsScaledScore] = useState('')
  const [coRawScore, setCoRawScore] = useState('');
  const [coScaledScore, setCoScaledScore] = useState('')
  const [vcRawScore, setVcRawScore] = useState('');
  const [vcScaledScore, setVcScaledScore] = useState('')
  const [fwRawScore, setFwRawScore] = useState('');
  const [fwScaledScore, setFwScaledScore] = useState('')
  const [vpRawScore, setVpRawScore] = useState('');
  const [vpScaledScore, setVpScaledScore] = useState('')
  const [psRawScore, setPsRawScore] = useState('');
  const [psScaledScore, setPsScaledScore] = useState('')
  const [ssRawScore, setSsRawScore] = useState('');
  const [ssScaledScore, setSsScaleScore] = useState('')
  const [redirect, setRedirect] = useState(false);

  const submit = async (e:SyntheticEvent) => {
    e.preventDefault();
    try{
    const response:any = await axios.post('http://localhost:5000/api/users/login', {
    //   email,
    //   password
    }, {withCredentials:true})
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
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
    <FormControl>
      <FormGroup>
      <TextField
        required
        margin='normal'
        id='bdRawScore'
        label="Block design"
        value={bdRawScore}
        onChange={(Event) => setBdRawScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='bdScaledScore'
        value={bdScaledScore}
        onChange={(Event) => setBdScaledScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='siRawScore'
        label="Similarities"
        value={siRawScore}
        onChange={(Event) => setSiRawScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='siScaledScore'
        value={siScaledScore}
        onChange={(Event) => setSiScaledScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='mrRawScore'
        label="Matrix reasoning"
        value={mrRawScore}
        onChange={(Event) => setMrRawScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='mrScaledScore'
        value={mrScaledScore}
        onChange={(Event) => setMrScaledScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='dsRawScore'
        label="Digit span"
        value={dsRawScore}
        onChange={(Event) => setDsRawScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='dsScaledScore'
        value={dsScaledScore}
        onChange={(Event) => setDsScaledScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='coRawScore'
        label="Coding"
        value={coRawScore}
        onChange={(Event) => setCoRawScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='coScaledScore'
        value={coScaledScore}
        onChange={(Event) => setCoScaledScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='vcRawScore'
        label="Vocabulary"
        value={vcRawScore}
        onChange={(Event) => setVcRawScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='vcScaledScore'
        value={vcScaledScore}
        onChange={(Event) => setVcScaledScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='fwRawScore'
        label="Figure weights"
        value={fwRawScore}
        onChange={(Event) => setFwRawScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='fwScaledScore'
        value={fwScaledScore}
        onChange={(Event) => setFwScaledScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='vpRawScore'
        label="Visual puzzles"
        value={vpRawScore}
        onChange={(Event) => setVpRawScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='vpScaledScore'
        value={vpScaledScore}
        onChange={(Event) => setVpScaledScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='psRawScore'
        label="Picture span"
        value={psRawScore}
        onChange={(Event) => setPsRawScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='psScaledScore'
        value={psScaledScore}
        onChange={(Event) => setPsScaledScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='ssRawScore'
        label="Symbol search"
        value={ssRawScore}
        onChange={(Event) => setSsRawScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='ssScaledScore'
        value={ssScaledScore}
        onChange={(Event) => setSsScaleScore(Event.target.value)}
      />
      <Button variant="contained" onClick={(e)=>{submit(e)}}>Submit</Button>
      </FormGroup>
    </FormControl>
    </Container>
  )
}

export default ScoreForm