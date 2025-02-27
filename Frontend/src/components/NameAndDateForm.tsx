import { SyntheticEvent, useState } from 'react'
import { Button, Container, FormControl, FormGroup, TextField } from '@mui/material'
import axios from 'axios';
// import { Navigate } from 'react-router-dom';

const NameAndDateForm = () => {
    const [subjectName, setSubjectName] = useState('');
    const [psychologistName, setPsychologistName] = useState('');
    const [testDateYear, setTestDateYear] = useState('');
    const [testDateMonth, setTestDateMonth] = useState('');
    const [testDateDay, setTestDateDay] = useState('');
    const [birthDateYear, setBirthDateYear] = useState('');
    const [birthdateMonth, setBirthDateMonth] = useState('');
    const [birthDateDay, setBirthDateDay] = useState('');
    const [testAgeYear, setTestAgeYear] = useState('');
    const [testAgeMonth, setTestAgeMonth] = useState('');
    const [testAgeDay, setTestAgeDay] = useState('');

    const submit = async (e:SyntheticEvent) => {
      e.preventDefault();
      try{
      const response:any = await axios.post('http://localhost:5000/api/users/login', {
      //   email,
      //   password
      }, {withCredentials:true})
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    } catch(error:any){
      alert(error.response.data.message)
    }
  }

    return (
      <Container>
      <FormControl>
      <FormGroup>
      <TextField
        required
        margin='normal'
        id='subjectName'
        label="Subject name"
        value={subjectName}
        onChange={(Event) => setSubjectName(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='psychologistName'
        label="Psychologist name"
        value={psychologistName}
        onChange={(Event) => setPsychologistName(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='testDateYear'
        value={testDateYear}
        onChange={(Event) => setTestDateYear(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='testDateMonth'
        value={testDateMonth}
        onChange={(Event) => setTestDateMonth(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='testDateDay'
        value={testDateDay}
        onChange={(Event) => setTestDateDay(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='birthDateYear'
        value={birthDateYear}
        onChange={(Event) => setBirthDateYear(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='birthdateMonth'
        value={birthdateMonth}
        onChange={(Event) => setBirthDateMonth(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='birthDateDay'
        value={birthDateDay}
        onChange={(Event) => setBirthDateDay(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='testAgeYear'
        value={testAgeYear}
        onChange={(Event) => setTestAgeYear(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='testAgeMonth'
        value={testAgeMonth}
        onChange={(Event) => setTestAgeMonth(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='testAgeDay'
        value={testAgeDay}
        onChange={(Event) => setTestAgeDay(Event.target.value)}
      />
      <Button variant="contained" onClick={(e)=>{submit(e)}}>Submit</Button>
      </FormGroup>
      </FormControl>
        </Container>
    )
}


export default NameAndDateForm