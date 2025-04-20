import {SyntheticEvent, useState} from 'react'
import { Button, TextField } from '@mui/material'
import { Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import { 
  bdScale,
  siScale,
  mrScale,
  dsScale,
  coScale,
  vcScale,
  fwScale,
  vpScale,
  psScale,
  ssScale,
  convertRawToScale  
} from '../frontendUtilities/utilities';
import axios from 'axios';


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

  const ageMonth = localStorage.getItem('ageMonth');
  const reportId = localStorage.getItem('reportId');

  const submit = async (e:SyntheticEvent) => {
    e.preventDefault();
    try{
      await axios.put(`http://localhost:5000/api/reports/${reportId}`, {
        blockDesign:{rawScore:bdRawScore,scaledScore:bdScaledScore},
        similarities:{rawScore:siRawScore,scaledScore:siScaledScore},
        matrixReasoning:{rawScore:mrRawScore,scaledScore:mrScaledScore},
        digitSpan:{rawScore:dsRawScore,scaledScore:dsScaledScore},
        coding:{rawScore:coRawScore,scaledScore:coScaledScore},
        vocabulary:{rawScore:vcRawScore,scaledScore:vcScaledScore},
        figureWeights:{rawScore:fwRawScore,scaledScore:fwScaledScore},
        visualPuzzles:{rawScore:vpRawScore,scaledScore:vpScaledScore},
        pictureSpan:{rawScore:psRawScore,scaledScore:psScaledScore},
        symbolSearch:{rawScore:ssRawScore,scaledScore:ssScaledScore},
    })
    localStorage.setItem("bdScaledScore",bdScaledScore)
    localStorage.setItem("siScaledScore",siScaledScore)
    localStorage.setItem("mrScaledScore",mrScaledScore)
    localStorage.setItem("dsScaledScore",dsScaledScore)
    localStorage.setItem("coScaledScore",coScaledScore)
    localStorage.setItem("vcScaledScore",vcScaledScore)
    localStorage.setItem("fwScaledScore",fwScaledScore)
    localStorage.setItem("vpScaledScore",vpScaledScore)
    localStorage.setItem("psScaledScore",psScaledScore)
    localStorage.setItem("ssScaledScore",ssScaledScore)
    localStorage.setItem("vciSum",String(Number(siScaledScore) + Number(vcScaledScore)))
    localStorage.setItem("vsiSum",String(Number(bdScaledScore) + Number(vpScaledScore)))
    localStorage.setItem("friSum",String(Number(mrScaledScore) + Number(fwScaledScore))) 
    localStorage.setItem("wmiSum",String(Number(dsScaledScore) + Number(psScaledScore)))
    localStorage.setItem("psiSum",String(Number(coScaledScore) + Number(ssScaledScore)))
    localStorage.setItem("fsIqSum",String(Number(bdScaledScore) + Number(siScaledScore) + Number(mrScaledScore) + Number(dsScaledScore) + Number(coScaledScore) + Number(vcScaledScore) + Number(fwScaledScore) + Number(vpScaledScore) + Number(psScaledScore) + Number(ssScaledScore)))
    setRedirect(true)
  } catch(error:any){
    alert(error.response.data.message)
  }
}

const computeScores = (e:SyntheticEvent) => {
  e.preventDefault();
  setBdScaledScore(convertRawToScale(bdScale,Number(bdRawScore),Number(ageMonth)))
  setSiScaledScore(convertRawToScale(siScale,Number(siRawScore),Number(ageMonth)))
  setMrScaledScore(convertRawToScale(mrScale,Number(mrRawScore),Number(ageMonth)))
  setDsScaledScore(convertRawToScale(dsScale,Number(dsRawScore),Number(ageMonth)))
  setCoScaledScore(convertRawToScale(coScale,Number(coRawScore),Number(ageMonth)))
  setVcScaledScore(convertRawToScale(vcScale,Number(vcRawScore),Number(ageMonth)))
  setFwScaledScore(convertRawToScale(fwScale,Number(fwRawScore),Number(ageMonth)))
  setVpScaledScore(convertRawToScale(vpScale,Number(vpRawScore),Number(ageMonth)))
  setPsScaledScore(convertRawToScale(psScale,Number(psRawScore),Number(ageMonth)))
  setSsScaleScore(convertRawToScale(ssScale,Number(ssRawScore),Number(ageMonth)))
}

if(redirect){
    return <Navigate to="/compositeIqPage" />
  }

  return (
    <>
      <br />
      <br />
        <Grid container size={12} spacing={2}>
          <Grid container size={6} justifyContent={'right'}>
          <Grid textAlign={'center'}>
            <p>Block design</p>
            <TextField
              required
              margin='normal'
              id='bdRawScore'
              label="Raw score"
              value={bdRawScore}
              onChange={(Event) => setBdRawScore(Event.target.value)}
            />
            <TextField
              required
              disabled
              margin='normal'
              id='bdScaledScore'
              label="Scaled score"
              value={bdScaledScore}
              onChange={(Event) => setBdScaledScore(Event.target.value)}
            />
          </Grid>
          <Grid textAlign={'center'}>
            <p>Similarities</p>
            <TextField
              required
              margin='normal'
              id='siRawScore'
              label="Raw score"
              value={siRawScore}
              onChange={(Event) => setSiRawScore(Event.target.value)}
            />
            <TextField
              required
              disabled
              margin='normal'
              id='siScaledScore'
              label="Scaled score"
              value={siScaledScore}
              onChange={(Event) => setSiScaledScore(Event.target.value)}
            />
          </Grid>
          <Grid textAlign={'center'}>
            <p>Matrix reasoning</p>
            <TextField
              required
              margin='normal'
              id='mrRawScore'
              label="Raw score"
              value={mrRawScore}
              onChange={(Event) => setMrRawScore(Event.target.value)}
            />
            <TextField
              required
              disabled
              margin='normal'
              id='mrScaledScore'
              label="Scaled score"
              value={mrScaledScore}
              onChange={(Event) => setMrScaledScore(Event.target.value)}
            />
          </Grid>
          <Grid textAlign={'center'}>
            <p>Digit span</p>
            <TextField
              required
              margin='normal'
              id='dsRawScore'
              label="Raw score"
              value={dsRawScore}
              onChange={(Event) => setDsRawScore(Event.target.value)}
            />
            <TextField
              required
              disabled
              margin='normal'
              id='dsScaledScore'
              label="Scaled score"
              value={dsScaledScore}
              onChange={(Event) => setDsScaledScore(Event.target.value)}
            />
          </Grid>
          <Grid textAlign={'center'}>
            <p>Coding</p>
            <TextField
              required
              margin='normal'
              id='coRawScore'
              label="Raw score"
              value={coRawScore}
              onChange={(Event) => setCoRawScore(Event.target.value)}
            />
            <TextField
              required
              disabled
              margin='normal'
              id='coScaledScore'
              label="Scaled score"
              value={coScaledScore}
              onChange={(Event) => setCoScaledScore(Event.target.value)}
            />
          </Grid>
          </Grid>
          <Grid container size={6} justifyContent={'left'}>
          <Grid textAlign={'center'}>
            <p>Vocabulary</p>
            <TextField
              required
              margin='normal'
              id='vcRawScore'
              label="Raw score"
              value={vcRawScore}
              onChange={(Event) => setVcRawScore(Event.target.value)}
            />
            <TextField
              required
              disabled
              margin='normal'
              id='vcScaledScore'
              label="Scaled score"
              value={vcScaledScore}
              onChange={(Event) => setVcScaledScore(Event.target.value)}
            />
          </Grid>
          <Grid textAlign={'center'}>
            <p>Figure weights</p>
            <TextField
              required
              margin='normal'
              id='fwRawScore'
              label="Raw score"
              value={fwRawScore}
              onChange={(Event) => setFwRawScore(Event.target.value)}
            />
            <TextField
              required
              disabled
              margin='normal'
              id='fwScaledScore'
              label="Scaled score"
              value={fwScaledScore}
              onChange={(Event) => setFwScaledScore(Event.target.value)}
            />
          </Grid>
          <Grid textAlign={'center'}>
            <p>Visual puzzles</p>
            <TextField
              required
              margin='normal'
              id='vpRawScore'
              label="Raw score"
              value={vpRawScore}
              onChange={(Event) => setVpRawScore(Event.target.value)}
            />
            <TextField
              required
              disabled
              margin='normal'
              id='vpScaledScore'
              label="Scaled score"
              value={vpScaledScore}
              onChange={(Event) => setVpScaledScore(Event.target.value)}
            />
          </Grid>
          <Grid textAlign={'center'}>
            <p>Picture span</p>
            <TextField
              required
              margin='normal'
              id='psRawScore'
              label="Raw score"
              value={psRawScore}
              onChange={(Event) => setPsRawScore(Event.target.value)}
            />
            <TextField
              required
              disabled
              margin='normal'
              id='psScaledScore'
              label="Scaled score"
              value={psScaledScore}
              onChange={(Event) => setPsScaledScore(Event.target.value)}
            />
          </Grid>
          <Grid textAlign={'center'}>
            <p>Symbol search</p>
            <TextField
              required
              margin='normal'
              id='ssRawScore'
              label="Raw score"
              value={ssRawScore}
              onChange={(Event) => setSsRawScore(Event.target.value)}
            />
            <TextField
              required
              disabled
              margin='normal'
              id='ssScaledScore'
              label="Scaled score"
              value={ssScaledScore}
              onChange={(Event) => setSsScaleScore(Event.target.value)}
            />
          </Grid>
          </Grid>
          <Grid size={12}>
            <Button variant="contained" onClick={(e)=>{computeScores(e)}}>Compute scores</Button>
          </Grid>
          <Grid size={12}>
            <Button variant="contained" onClick={(e)=>{submit(e)}}>Submit</Button>
          </Grid>
      </Grid>
      </>
  )
}

export default ScoreForm