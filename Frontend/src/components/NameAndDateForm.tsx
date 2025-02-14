import {SyntheticEvent, useState} from 'react'
import { Button, Container, FormControl, FormGroup, TextField } from '@mui/material'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const NameAndDateForm = () => {
    const [subjectName, setSubjectName] = useState('');
    const [psychologistName, setPsychologistName] = useState('');
    const [testDateYear, setTestDateYear] = useState('');
    const [testDateMonth, setTestDateMonth] = useState('');
    const [testDateDay, setTestDateDay] = useState('');
    const [birthDateYear, setBirthDateYear] = useState('');
    const [birthdateMonth, steBirthDateMonth] = useState('');
    const [birthDateDay, setBirthDateDay] = useState('');
    const [testAgeYear, setTestAgeYear] = useState('');
    const [testAgeMonth, setTestAgeMonth] = useState('');
    const [testAgeDay, setTestAgeDay] = useState('');

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
      </FormGroup>
      </FormControl>
        </Container>
    )
}


export default NameAndDateForm