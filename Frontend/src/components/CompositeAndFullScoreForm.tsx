import {SyntheticEvent, useState} from 'react'
import { Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid2';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { 
  vciComposite, 
  vsiComposite,
  friComposite, 
  wmiComposite, 
  psiComposite, 
  fsIq,
  convertSumOfScaleToComposite,
  getFsIq
} from '../frontendUtilities/utilities';


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

  const reportId = localStorage.getItem("reportId");
  const vciArr = convertSumOfScaleToComposite(Number(localStorage.getItem("vciSum")), vciComposite);
  const vsiArr = convertSumOfScaleToComposite(Number(localStorage.getItem("vsiSum")), vsiComposite);
  const friArr = convertSumOfScaleToComposite(Number(localStorage.getItem("friSum")), friComposite);
  const wmiArr = convertSumOfScaleToComposite( Number(localStorage.getItem("wmiSum")), wmiComposite);
  const psiArr = convertSumOfScaleToComposite(Number(localStorage.getItem("psiSum")), psiComposite);
  const fsIqArr = getFsIq(Number(localStorage.getItem("fsIqSum")), fsIq);

  const submit = async (e:SyntheticEvent) => {
    e.preventDefault();
    try{
      await axios.put(`http://localhost:5000/api/reports/${reportId}`, {
        scaledScoreToComposite:{
          verbalComprehension:{sumOfScale:sumOfVerbalCompScores,compositeScore:vciCompositeScore,percentRank:vciPercentile},
          visualSpacial:{sumOfScale:sumOfVisualSpacialScores,compositeScore:vsiCompositeScore,percentRank:vsiPercentile},
          fluidReasoning:{sumOfScale:sumOfFluidReasoningScores,compositeScore:friCompositeScore,percentRank:friPercentile},
          workingMemory:{sumOfScale:sumOfWorkingMemoryScores,compositeScore:wmiCompositeScore,percentRank:wmiPercentile},
          processingSpeed:{sumOfScale:sumOfProcessingSpeedScores,compositeScore:psiCompositeScore,percentRank:psiPercentile},
          fullScale:{sumOfScale:sumOfFullScaleScores,compositeScore:fsiqCompositeScore,percentRank:fsiqPercentile}
        }
    })
    localStorage.setItem('vci',vciCompositeScore);
    localStorage.setItem('vsi', vsiCompositeScore);
    localStorage.setItem('fri',friCompositeScore);
    localStorage.setItem('wmi',wmiCompositeScore);
    localStorage.setItem('psi',psiCompositeScore);
    localStorage.setItem('fsiq',fsiqCompositeScore);
    setRedirect(true)
  } catch(error:any){
    alert(error.response.data.message)
  }
}

const computeComposite = async (e:SyntheticEvent) => {
  e.preventDefault();
  setSumOfVerbalCompScores(String(vciArr[0]))
  setVciCompositeScore(String(vciArr[1]))
  setVciPercentile(String(vciArr[2]))
  setSumOfVisualSpacialScores(String(vsiArr[0]))
  setVsiCompositeScore(String(vsiArr[1]))
  setVsiPercentile(String(vsiArr[2]))
  setSumOfFluidReasoningScores(String(friArr[0]))
  setFriCompositeScore(String(friArr[1]))
  setFriPercentile(String(friArr[2]))
  setSumOfWorkingMemoryScores(String(wmiArr[0]))
  setWmiCompositeScore(String(wmiArr[1]))
  setWmiPercentile(String(wmiArr[2]))
  setSumOfProcessingSpeedScores(String(psiArr[0]))
  setPsiCompositeScore(String(psiArr[1]))
  setPsiPercentile(String(psiArr[2]))
  setSumOfFullScaleScores(String(fsIqArr[0]))
  setFsiqCompositeScore(String(fsIqArr[1]))
  setFsiqPercentile(String(fsIqArr[2]))
}

if(redirect){
    return <Navigate to={'/reportTextPage'} />
  }

  return (
    <>
      <br />
      <br />
        <Grid container size={12} spacing={2}>
          <Grid container size={2} justifyContent={'right'}>
            <Grid textAlign={'center'}>
              <TextField
                required
                disabled
                margin='normal'
                id='sumOfVerbalCompScores'
                label="Verbal comprehension"
                value={sumOfVerbalCompScores}
                onChange={(Event) => setSumOfVerbalCompScores(Event.target.value)}
              />
              <TextField
                required
                disabled
                margin='normal'
                id='vciCompositeScore'
                label="VCI"
                value={vciCompositeScore}
                onChange={(Event) => setVciCompositeScore(Event.target.value)}
              />
              <TextField
                required
                disabled
                margin='normal'
                id='vciPercentile'
                label="Percentile"
                value={vciPercentile}
                onChange={(Event) => setVciPercentile(Event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container size={2} justifyContent={'right'}>
            <Grid textAlign={'center'}>
              <TextField
                required
                disabled
                margin='normal'
                id='sumOfVisualSpacialScores'
                label="Visual spacial"
                value={sumOfVisualSpacialScores}
                onChange={(Event) => setSumOfVisualSpacialScores(Event.target.value)}
              />
              <TextField
                required
                disabled
                margin='normal'
                id='vsiCompositeScore'
                label="VSI"
                value={vsiCompositeScore}
                onChange={(Event) => setVsiCompositeScore(Event.target.value)}
              />
              <TextField
                required
                disabled
                margin='normal'
                id='vsiPercentile'
                label="Percentile"
                value={vsiPercentile}
                onChange={(Event) => setVsiPercentile(Event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container size={2} justifyContent={'right'}>
            <Grid textAlign={'center'}>
              <TextField
                required
                disabled
                margin='normal'
                id='sumOfFluidReasoningScores'
                label="Fluid reasoning"
                value={sumOfFluidReasoningScores}
                onChange={(Event) => setSumOfFluidReasoningScores(Event.target.value)}
              />
              <TextField
                required
                disabled
                margin='normal'
                id='friCompositeScore'
                label="FRI"
                value={friCompositeScore}
                onChange={(Event) => setFriCompositeScore(Event.target.value)}
              />
              <TextField
                required
                disabled
                margin='normal'
                id='friPercentile'
                label="Percentile"
                value={friPercentile}
                onChange={(Event) => setFriPercentile(Event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container size={2} justifyContent={'right'}>
            <Grid textAlign={'center'}>
              <TextField
                required
                disabled
                margin='normal'
                id='sumOfWorkingMemoryScores'
                label="Working memory"
                value={sumOfWorkingMemoryScores}
                onChange={(Event) => setSumOfWorkingMemoryScores(Event.target.value)}
              />
              <TextField
                required
                disabled
                margin='normal'
                id='wmiCompositeScore'
                label="WMI"
                value={wmiCompositeScore}
                onChange={(Event) => setWmiCompositeScore(Event.target.value)}
              />
              <TextField
                required
                disabled
                margin='normal'
                id='wmiPercentile'
                label="Percentile"
                value={wmiPercentile}
                onChange={(Event) => setWmiPercentile(Event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container size={2} justifyContent={'right'}>
            <Grid textAlign={'center'}>
              <TextField
                required
                disabled
                margin='normal'
                id='sumOfProcessingSpeedScores'
                label="Processing speed"
                value={sumOfProcessingSpeedScores}
                onChange={(Event) => setSumOfProcessingSpeedScores(Event.target.value)}
              />
              <TextField
                required
                disabled
                margin='normal'
                id='psiCompositeScore'
                label="PSI"
                value={psiCompositeScore}
                onChange={(Event) => setPsiCompositeScore(Event.target.value)}
              />
              <TextField
                required
                disabled
                margin='normal'
                id='psiPercentile'
                label="Percentile"
                value={psiPercentile}
                onChange={(Event) => setPsiPercentile(Event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container size={2} justifyContent={'right'}>
            <Grid textAlign={'center'}>
              <TextField
                required
                disabled
                margin='normal'
                id='sumOfFullScaleScores'
                label="Full scale"
                value={sumOfFullScaleScores}
                onChange={(Event) => setSumOfFullScaleScores(Event.target.value)}
              />
              <TextField
                required
                disabled
                margin='normal'
                id='fsiqCompositeScore'
                label="FSIQ"
                value={fsiqCompositeScore}
                onChange={(Event) => setFsiqCompositeScore(Event.target.value)}
              />
              <TextField
                required
                disabled
                margin='normal'
                id='fsiqPercentile'
                label="Percentile"
                value={fsiqPercentile}
                onChange={(Event) => setFsiqPercentile(Event.target.value)}
              />
            </Grid>
          </Grid>
      </Grid>
      <br />
      <Grid>
        <Button variant="contained" onClick={(e)=>{computeComposite(e)}}>Compute values</Button>
      </Grid>
      <br />
      <Grid>
        <Button variant="contained" onClick={(e)=>{submit(e)}}>Submit</Button>
      </Grid>
    </>
  )
}

export default CompositeAndFullScoreForm