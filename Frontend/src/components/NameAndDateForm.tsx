import { SyntheticEvent, useState } from 'react'
import { Box, Button, Container, FormControl, FormGroup, TextField } from '@mui/material'
import Grid from '@mui/material/Grid2'
import * as utils from '../frontendUtilities/utilities'
import axios from 'axios';
// import { Navigate } from 'react-router-dom';

const NameAndDateForm = () => {
  const [psychologistFirstName, setPsychologistFirstName] = useState('');
  const [psychologistLastName, setPsychologistLastName] = useState('');
  const [subjectFirstName, setSubjectFirstName] = useState('');
  const [subjectLastName, setSubjectLastName] = useState('');
  const [testDateYear, setTestDateYear] = useState('');
  const [testDateMonth, setTestDateMonth] = useState('');
  const [testDateDay, setTestDateDay] = useState('');
  const [birthDateYear, setBirthDateYear] = useState('');
  const [birthdateMonth, setBirthDateMonth] = useState('');
  const [birthDateDay, setBirthDateDay] = useState('');
  // const [testAgeYear, setTestAgeYear] = useState(0);
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid spacing={2}>
          <Grid textAlign={'left'}>
            <TextField
              required
              margin='normal'
              id='testDateMonth'
              label="Test month"
              value={testDateMonth}
              onChange={(Event) => setTestDateMonth(Event.target.value)}
            />
            <TextField
              required
              margin='normal'
              id='testDateDay'
              label="Test day"
              value={testDateDay}
              onChange={(Event) => setTestDateDay(Event.target.value)}
            />
            <TextField
              required
              margin='normal'
              id='testDateYear'
              label="Test year"
              value={testDateYear}
              onChange={(Event) => setTestDateYear(Event.target.value)}
            />
          </Grid>
          <Grid textAlign={'left'}>
            <TextField
              required
              margin='normal'
              id='psychologistFirstName'
              label="Psychologist first name"
              value={psychologistFirstName}
              onChange={(Event) => setPsychologistFirstName(Event.target.value)}
            />
            <TextField
              required
              margin='normal'
              id='psychologistLastName'
              label="Psychologist last name"
              value={psychologistLastName}
              onChange={(Event) => setPsychologistLastName(Event.target.value)}
            />
          </Grid>
          <Grid textAlign={'left'}>
            <TextField
              required
              margin='normal'
              id='subjectFirstName'
              label="Subject first name"
              value={subjectFirstName}
              onChange={(Event) => setSubjectFirstName(Event.target.value)}
            />
            <TextField
              required
              margin='normal'
              id='subjectLastName'
              label="Subject last name"
              value={subjectLastName}
              onChange={(Event) => setSubjectLastName(Event.target.value)}
            />
          </Grid>
          <Grid textAlign={'left'}>
            <TextField
              required
              margin='normal'
              id='birthdateMonth'
              label="Birth month"
              value={birthdateMonth}
              onChange={(Event) => setBirthDateMonth(Event.target.value)}
            />
            <TextField
              required
              margin='normal'
              id='birthDateDay'
              label="Birth day"
              value={birthDateDay}
              onChange={(Event) => setBirthDateDay(Event.target.value)}
            />
            <TextField
              required
              margin='normal'
              id='birthDateYear'
              label="Birth tear"
              value={birthDateYear}
              onChange={(Event) => setBirthDateYear(Event.target.value)}
            />
          </Grid>
          <Grid textAlign={'left'}>
            <TextField
              required
              margin='normal'
              id='testAgeYear'
              value={utils.computeYear(Number(testDateMonth),Number(birthdateMonth),Number(testDateYear),Number(birthDateYear),Number(testDateDay),Number(birthDateDay))}
              // value={testAgeYear}
              // onChange={(Event) => setTestAgeYear(Event.target.value)}
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
          </Grid>
          <Button variant="contained" onClick={(e)=>{submit(e)}}>Submit</Button>
        </Grid>
      </Box>
    )
}


export default NameAndDateForm