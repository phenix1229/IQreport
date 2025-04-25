import { SyntheticEvent, useEffect, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { computeDay, computeMonth, computeYear } from '../frontendUtilities/utilities'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { grey, red } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
// import { setAuth } from '../app/authSlice';

const NameAndDateForm = () => {

  // const dispatch = useDispatch();
  
  // useEffect(()=>{
  //   if(sessionStorage.user){
  //     dispatch(setAuth(true))
  //   }
  // });

  // const auth:boolean = useSelector((state:RootState) => state.auth.value)
  
  const [redirect, setRedirect] = useState(false);
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
  const [ageComputed,setAgeComputed] = useState(false);

  const user:any = useSelector((state:RootState) => state.user.user)

  const submit = async (e:SyntheticEvent) => {
    e.preventDefault();
    if(
      subjectFirstName === '' ||
      subjectLastName === '' ||
      subjectEmail === '' ||
      testDateMonth === '' || testDateDay === '' || testDateYear === '' ||
      birthdateMonth === '' || birthDateDay === '' || birthDateYear === '' ||
      testAgeYear === '' || testAgeMonth === '' || testAgeDay === '' ||
      ageComputed === false
    ){
      alert("Please complete all fields and compute age.");
    }
    try{
      const newReport = await axios.post('http://localhost:5000/api/reports', {
        psychologistFirstName:user.firstName,
        psychologistLastName:user.lastName,
        psychologistEmail:user.email,
        subjectFirstName,
        subjectLastName,
        subjectEmail,
        testDate:`${testDateMonth}/${testDateDay}/${testDateYear}`,
        birthDate:`${birthdateMonth}/${birthDateDay}/${birthDateYear}`,
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
    setAgeComputed(true);
  }

  if(redirect){
    return(
      <Navigate to={'/scorePage'} />
    )
  }

  // if(!auth){
  //   return (
  //     <h2>Access denied</h2>
  //   )
  // }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <br />
        <br />
        <Grid>
          <h3>Please complete all fields and compute age.</h3>
          <Grid textAlign={'left'}>
            <TextField
              required
              slotProps={{inputLabel:{sx:{color:testDateMonth === '' ? red[500] : grey[900]}}}}
              margin='normal'
              id='testDateMonth'
              label="Test month"
              value={testDateMonth}
              onChange={(Event) => setTestDateMonth(Event.target.value)}
            />
            <TextField
              required
              slotProps={{inputLabel:{sx:{color:testDateDay === '' ? red[500] : grey[900]}}}}
              margin='normal'
              id='testDateDay'
              label="Test day"
              value={testDateDay}
              onChange={(Event) => setTestDateDay(Event.target.value)}
            />
            <TextField
              required
              slotProps={{inputLabel:{sx:{color:testDateYear === '' ? red[500] : grey[900]}}}}
              margin='normal'
              id='testDateYear'
              label="Test year"
              value={testDateYear}
              onChange={(Event) => setTestDateYear(Event.target.value)}
            />
          </Grid>
          <Grid textAlign={'left'}>
            <TextField
              disabled
              margin='normal'
              id='psychologistFirstName'
              label="Psychologist first name"
              value={user.firstName}
            />
            <TextField
              disabled
              margin='normal'
              id='psychologistLastName'
              label="Psychologist last name"
              value={user.lastName}
            />
          </Grid>
          <Grid textAlign={'left'}>
            <TextField
              required
              slotProps={{inputLabel:{sx:{color:subjectFirstName === '' ? red[500] : grey[900]}}}}
              margin='normal'
              id='subjectFirstName'
              label="Subject first name"
              value={subjectFirstName}
              onChange={(Event) => setSubjectFirstName(Event.target.value)}
            />
            <TextField
              required
              slotProps={{inputLabel:{sx:{color:subjectLastName === '' ? red[500] : grey[900]}}}}
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
              slotProps={{inputLabel:{sx:{color:birthdateMonth === '' ? red[500] : grey[900]}}}}
              margin='normal'
              id='birthdateMonth'
              label="Birth month"
              value={birthdateMonth}
              onChange={(Event) => {setBirthDateMonth(Event.target.value)}}
            />
            <TextField
              required
              slotProps={{inputLabel:{sx:{color:birthDateDay === '' ? red[500] : grey[900]}}}}
              margin='normal'
              id='birthDateDay'
              label="Birth day"
              value={birthDateDay}
              onChange={(Event) => {setBirthDateDay(Event.target.value)}}
            />
            <TextField
              required
              slotProps={{inputLabel:{sx:{color:birthDateYear === '' ? red[500] : grey[900]}}}}
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
              slotProps={{inputLabel:{sx:{color:subjectEmail === '' ? red[500] : grey[900]}}}}
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
          <Button variant="contained" color={!ageComputed ? 'error' : 'primary'} onClick={(e)=>{computeAge(e)}}>Compute age</Button>
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