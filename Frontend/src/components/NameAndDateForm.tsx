import { SyntheticEvent, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { computeDay, computeMonth, computeYear } from '../frontendUtilities/utilities'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const NameAndDateForm = () => {
  const [redirect, setRedirect] = useState(false);
  const [psychologistFirstName, setPsychologistFirstName] = useState('');
  const [psychologistLastName, setPsychologistLastName] = useState('');
  const [subjectFirstName, setSubjectFirstName] = useState('');
  const [subjectLastName, setSubjectLastName] = useState('');
  const [subjectEmail, setSubjectEmail] = useState('');
  const [testDateYear, setTestDateYear] = useState('');
  const [testDateMonth, setTestDateMonth] = useState('');
  const [testDateDay, setTestDateDay] = useState('');
  const [birthDateYear, setBirthDateYear] = useState('');
  const [birthdateMonth, setBirthDateMonth] = useState('');
  const [birthDateDay, setBirthDateDay] = useState('');
  const [testAgeYear, setTestAgeYear] = useState('');
  const [testAgeMonth, setTestAgeMonth] = useState('');
  const [testAgeDay, setTestAgeDay] = useState('');
  const [gender, setGender] = useState('male');
  
  const submit = async (e:SyntheticEvent) => {
    e.preventDefault();
    try{
      const newReport = await axios.post('http://localhost:5000/api/reports', {
        psychologistFirstName,
        psychologistLastName,
        subjectFirstName,
        subjectLastName,
        testDate:[
        Number(testDateYear),
        Number(testDateMonth),
        Number(testDateDay)],
        birthDate:[
        Number(birthDateYear),
        Number(birthdateMonth),
        Number(birthDateDay)],
        testAge:[
        Number(testAgeYear),
        Number(testAgeMonth),
        Number(testAgeDay)]
      })
      const subject = await axios.post(`http://localhost:5000/api/subjects/`, {
        firstName:subjectFirstName,
        lastName:subjectLastName,
        email:subjectEmail,
        birthMonth:birthdateMonth,
        birthDay:birthDateDay,
        birthYear:birthDateYear
      })
      const reps = subject.data.reports;
      await axios.put(`http://localhost:5000/api/subjects/${subjectEmail}`, {
        reports: [...reps, newReport.data._id]
      })
      localStorage.setItem('ageMonth',testAgeMonth);
      localStorage.setItem('reportId',newReport.data._id);
      localStorage.setItem('subjectFirstName',subjectFirstName);
      localStorage.setItem('gender',gender);
      setRedirect(true);
    } catch(error:any){
      alert(error.message)
    }
  }

  const computeAge = async (e:SyntheticEvent) => {
    e.preventDefault();
    setTestAgeMonth(String(computeMonth(Number(testDateMonth),Number(birthdateMonth),Number(testDateDay),Number(birthDateDay))));
    setTestAgeDay(String(computeDay(Number(testDateDay),Number(birthDateDay),Number(testDateYear),Number(testDateMonth))));
    setTestAgeYear(String(computeYear(Number(testDateMonth),Number(birthdateMonth),Number(testDateYear),Number(birthDateYear),Number(testDateDay),Number(birthDateDay))));
  }

  if(redirect){
    return(
      <Navigate to={'/scorePage'} />
    )
  }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <br />
        <br />
        <Grid>
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
              onChange={(Event) => {setBirthDateMonth(Event.target.value)}}
            />
            <TextField
              required
              margin='normal'
              id='birthDateDay'
              label="Birth day"
              value={birthDateDay}
              onChange={(Event) => {setBirthDateDay(Event.target.value)}}
            />
            <TextField
              required
              margin='normal'
              id='birthDateYear'
              label="Birth year"
              value={birthDateYear}
              onChange={(Event) => {setBirthDateYear(Event.target.value)}}
            />
          </Grid>
          <Grid textAlign={'left'}>
            <TextField
              required
              margin='normal'
              id='subjectEmail'
              label="Subject email"
              value={subjectEmail}
              onChange={(Event) => setSubjectEmail(Event.target.value)}
            />
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender" onChange={(Event) => setGender(Event.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </Grid>
          <p>
            Subject age
          </p>
          <Button variant="contained" onClick={(e)=>{computeAge(e)}}>Compute age</Button>
          <Grid textAlign={'left'}>
            <TextField
              required
              margin='normal'
              id='testAgeYear'
              label="Years"
              disabled
              value={testAgeYear}
            />
            <TextField
              required
              margin='normal'
              id='testAgeMonth'
              label="Months"
              disabled
              value={testAgeMonth}
            />
            <TextField
              required
              margin='normal'
              id='testAgeDay'
              label="Days"
              disabled
              value={testAgeDay}
            />
          </Grid>
          <Button variant="contained" onClick={(e)=>{submit(e)}}>Submit</Button>
        </Grid>
      </Box>
    )
}


export default NameAndDateForm