import Grid from '@mui/material/Grid2';
import { Button } from "@mui/material"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { compositeRating, scaledRating } from '../frontendUtilities/utilities';
// import axios from 'axios';
import {data} from "./blah";

// const reportId = localStorage.getItem('reportId');
// const {data} = await axios.get(`http://localhost:5000/api/reports/${reportId}`);

const WrittenReportPage = () => {

  const [redirect,setRedirect] = useState(false);

  if(redirect){
    return <Navigate to="/userHome" />
  }

  return (
    <>
      <br />
      <br />
      <hr />
      <h2>PSYCHOEDUCATIONAL EVALUATION REPORT</h2>
      <hr />
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <br />
          <p className='text-paragraph'>
          Date of Evaluation: {`${data.testDate}`}
          <br />
          Subject Name: {`${data.subjectFirstName} ${data.subjectLastName}`}
          <br />
          DOB: {`${data.birthDate}`}
          </p>
          <br />
          </Grid>
          <Grid size={12}>
          <hr />
          <h3>EVALUATION RESULTS</h3>
          <hr />
          <h4>Cognitive Assessment Results</h4>
          <hr />
          <br />
          <h4>Reasoning Abilities</h4>
          <p className='text-paragraph'>
            {`${data.reportDetails.reasoningAbilities}`}
          </p>
          <br />
          <h4>Language Abilities</h4>
          <p className='text-paragraph'>
            {`${data.reportDetails.languageAbilities}`}
          </p>
          <br />
          <h4>Visuospatial Abilities</h4>
          <p className='text-paragraph'>
            {`${data.reportDetails.visuospatialAbilities}`}
          </p>
          <br />
          <h4>Memory</h4>
          <p className='text-paragraph'>
            {`${data.reportDetails.memory}`}
          </p>
          <br />
          <h4>Executive Function</h4>
          <p className='text-paragraph'>
            {`${data.reportDetails.executiveFunction}`}
          </p>
          <br />
          <hr />
          <h3>Test Scores</h3>
          <hr />
          <br />
          <br />
          <br />
          <br />
          <table>
          <caption>WISC-V IQ/Composite Scores</caption>
            <tr>
              <th>Composite</th>
              <th>IQ/Composite Scores</th>
              <th>Percentile</th>
              <th>Qualitative Description/Range</th>
            </tr>
            <tr>
              <td>Full Scale IQ</td>
              <td>{`${data.scaledScoreToComposite.fullScale.compositeScore}`}</td>
              <td>{`${data.scaledScoreToComposite.fullScale.percentRank}`}</td>
              <td>{`${compositeRating(Number(data.scaledScoreToComposite.fullScale.compositeScore))}`}</td>
            </tr>
            <tr>
              <td>Verbal Comprehension</td>
              <td>{`${data.scaledScoreToComposite.verbalComprehension.compositeScore}`}</td>
              <td>{`${data.scaledScoreToComposite.verbalComprehension.percentRank}`}</td>
              <td>{`${compositeRating(Number(data.scaledScoreToComposite.verbalComprehension.compositeScore))}`}</td>
            </tr>
            <tr>
              <td>Fluid Reasoning</td>
              <td>{`${data.scaledScoreToComposite.fluidReasoning.compositeScore}`}</td>
              <td>{`${data.scaledScoreToComposite.fluidReasoning.percentRank}`}</td>
              <td>{`${compositeRating(Number(data.scaledScoreToComposite.fluidReasoning.compositeScore))}`}</td>
            </tr>
            <tr>
              <td>Visual-Spatial</td>
              <td>{`${data.scaledScoreToComposite.visualSpacial.compositeScore}`}</td>
              <td>{`${data.scaledScoreToComposite.visualSpacial.percentRank}`}</td>
              <td>{`${compositeRating(Number(data.scaledScoreToComposite.visualSpacial.compositeScore))}`}</td>
            </tr>
            <tr>
              <td>Working Memory</td>
              <td>{`${data.scaledScoreToComposite.workingMemory.compositeScore}`}</td>
              <td>{`${data.scaledScoreToComposite.workingMemory.percentRank}`}</td>
              <td>{`${compositeRating(Number(data.scaledScoreToComposite.workingMemory.compositeScore))}`}</td>
            </tr>
            <tr>
              <td>Processing Speed</td>
              <td>{`${data.scaledScoreToComposite.processingSpeed.compositeScore}`}</td>
              <td>{`${data.scaledScoreToComposite.processingSpeed.percentRank}`}</td>
              <td>{`${compositeRating(Number(data.scaledScoreToComposite.processingSpeed.compositeScore))}`}</td>
            </tr>
          </table>
          <br />
          <br />
          <br />
          <br />
          <table id='scaledScoreTable'>
            <caption>WISC-V Subtest Scaled Scores</caption>
            <tr>
              <th>Subtests</th>
              <th>Scaled Scores</th>
              <th>Qualitative Description/Range</th>
            </tr>
            <tr>
              <td>Vocabulary</td>
              <td>{`${data.vocabulary.scaledScore}`}</td>
              <td>{`${scaledRating(Number(data.vocabulary.scaledScore))}`}</td>
            </tr>
            <tr>
              <td>Similarities</td>
              <td>{`${data.similarities.scaledScore}`}</td>
              <td>{`${scaledRating(Number(data.similarities.scaledScore))}`}</td>
            </tr>
            <tr>
              <td>Matrix Reasoning</td>
              <td>{`${data.matrixReasoning.scaledScore}`}</td>
              <td>{`${scaledRating(Number(data.matrixReasoning.scaledScore))}`}</td>
            </tr>
            <tr>
              <td>Figure Weights</td>
              <td>{`${data.figureWeights.scaledScore}`}</td>
              <td>{`${scaledRating(Number(data.figureWeights.scaledScore))}`}</td>
            </tr>
            <tr>
              <td>Block Design</td>
              <td>{`${data.blockDesign.scaledScore}`}</td>
              <td>{`${scaledRating(Number(data.blockDesign.scaledScore))}`}</td>
            </tr>
            <tr>
              <td>Visual Puzzles</td>
              <td>{`${data.visualPuzzles.scaledScore}`}</td>
              <td>{`${scaledRating(Number(data.visualPuzzles.scaledScore))}`}</td>
            </tr>
            <tr>
              <td>Digit Span</td>
              <td>{`${data.digitSpan.scaledScore}`}</td>
              <td>{`${scaledRating(Number(data.digitSpan.scaledScore))}`}</td>
            </tr>
            <tr>
              <td>Picture Span</td>
              <td>{`${data.pictureSpan.scaledScore}`}</td>
              <td>{`${scaledRating(Number(data.pictureSpan.scaledScore))}`}</td>
            </tr>
            <tr>
              <td>Coding</td>
              <td>{`${data.coding.scaledScore}`}</td>
              <td>{`${scaledRating(Number(data.coding.scaledScore))}`}</td>
            </tr>
            <tr>
              <td>Symbol Search</td>
              <td>{`${data.symbolSearch.scaledScore}`}</td>
              <td>{`${scaledRating(Number(data.symbolSearch.scaledScore))}`}</td>
            </tr>
          </table>
          <br />
          <br />
          <p className='text-paragraph'>
            Evaluator's Name: {`${data.psychologistFirstName} ${data.psychologistLastName}`}
            <br />
            Date of Report: {`${data.testDate}`}
          </p>
        </Grid>
        <br />
        <br />
        <br />
        <Button variant="contained" onClick={()=>{setRedirect(true)}}>Close</Button>
      </Grid>
    </>
  )
}

export default WrittenReportPage