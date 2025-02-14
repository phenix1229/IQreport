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
  const [sumOfVerbalCompScores, setSumOfVerbalCompScores] = useState('');
  const [vciCompositeScore, setVciCompositeScore] = useState('');
  const [vciPercentile, setVciPercentile] = useState('');
  const [sumOfVisualSpacialScores, setSumOfVisualSpacialScores] = useState('');
  const [vsiCompositeScore, setVsiCompositeScore] = useState('');
  const [vsiPercentile, setVsiPercentile] = useState('');
  const [sumOfFluidReasoningScores, setSumOfFluidReasoningScores] = useState('');
  const [friCompositeScore, setFriCompositeScore] = useState('');
  const [friPercentile, setFriPercentile] = useState('');
  const [sumOfWorkingMemoryScores, setSumOfWorkingMemoryScores] = useState('');
  const [wmiCompositeScore, setWmiCompositeScore] = useState('');
  const [wmiPercentile, setWmiPercentile] = useState('');
  const [sumOfProcessingSpeedScores, setSumOfProcessingSpeedScores] = useState('');
  const [psiCompositeScore, setPsiCompositeScore] = useState('');
  const [psiPercentile, setPsiPercentile] = useState('');
  const [sumOfFullScaleScores, setSumOfFullScaleScores] = useState('');
  const [fsiqCompositeScore, setFsiqCompositeScore] = useState('');
  const [fsiqPercentile, setFsiqPercentile] = useState('');
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
    <h2>Please log in</h2>
    <FormControl>
        <FormGroup>
      <TextField
        required
        margin='normal'
        id='blockDesign'
        label="Block design"
        value={bdRawScore}
        onChange={(Event) => setBdRawScore(Event.target.value)}
      />
      <Button variant="contained" onClick={(e)=>{submit(e)}}>Submit</Button>
      </FormGroup>
    </FormControl>
    </Container>
  )
}

export default ScoreForm