import {SyntheticEvent, useState} from 'react'
import { Button, Container, FormControl, FormGroup, TextField } from '@mui/material'
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const CompositeAndFullScoreForm = () => {

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
    <FormControl>
      <FormGroup>
      <TextField
        required
        margin='normal'
        id='sumOfVerbalCompScores'
        label="Verbal comprehension"
        value={sumOfVerbalCompScores}
        onChange={(Event) => setSumOfVerbalCompScores(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='vciCompositeScore'
        label="VCI"
        value={vciCompositeScore}
        onChange={(Event) => setVciCompositeScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='vciPercentile'
        // label="Block design"
        value={vciPercentile}
        onChange={(Event) => setVciPercentile(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='sumOfVisualSpacialScores'
        label="Visual spacial"
        value={sumOfVisualSpacialScores}
        onChange={(Event) => setSumOfVisualSpacialScores(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='vsiCompositeScore'
        label="VSI"
        value={vsiCompositeScore}
        onChange={(Event) => setVsiCompositeScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='vsiPercentile'
        // label="Block design"
        value={vsiPercentile}
        onChange={(Event) => setVsiPercentile(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='sumOfFluidReasoningScores'
        label="Fluid reasoning"
        value={sumOfFluidReasoningScores}
        onChange={(Event) => setSumOfFluidReasoningScores(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='friCompositeScore'
        label="FRI"
        value={friCompositeScore}
        onChange={(Event) => setFriCompositeScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='friPercentile'
        // label="Block"
        value={friPercentile}
        onChange={(Event) => setFriPercentile(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='sumOfWorkingMemoryScores'
        label="Working memory"
        value={sumOfWorkingMemoryScores}
        onChange={(Event) => setSumOfWorkingMemoryScores(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='wmiCompositeScore'
        label="WMI"
        value={wmiCompositeScore}
        onChange={(Event) => setWmiCompositeScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='wmiPercentile'
        // label="Block design"
        value={wmiPercentile}
        onChange={(Event) => setWmiPercentile(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='sumOfProcessingSpeedScores'
        label="Processing speed"
        value={sumOfProcessingSpeedScores}
        onChange={(Event) => setSumOfProcessingSpeedScores(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='psiCompositeScore'
        label="PSI"
        value={psiCompositeScore}
        onChange={(Event) => setPsiCompositeScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='psiPercentile'
        // label="Block design"
        value={psiPercentile}
        onChange={(Event) => setPsiPercentile(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='sumOfFullScaleScores'
        label="Full scale"
        value={sumOfFullScaleScores}
        onChange={(Event) => setSumOfFullScaleScores(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='fsiqCompositeScore'
        label="FSIQ"
        value={fsiqCompositeScore}
        onChange={(Event) => setFsiqCompositeScore(Event.target.value)}
      />
      <TextField
        required
        margin='normal'
        id='fsiqPercentile'
        // label="Block design"
        value={fsiqPercentile}
        onChange={(Event) => setFsiqPercentile(Event.target.value)}
      />
      <Button variant="contained" onClick={(e)=>{submit(e)}}>Submit</Button>
      </FormGroup>
    </FormControl>
    </Container>
  )
}

export default CompositeAndFullScoreForm