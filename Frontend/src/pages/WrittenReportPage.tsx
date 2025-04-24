import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import '../interceptors/axios'
import Grid from '@mui/material/Grid2';
import { Button } from "@mui/material"
// import { Navigate } from "react-router-dom"
import { compositeRating, scaledRating } from '../frontendUtilities/utilities';
import axios from 'axios'
// import { setSubjects } from '../app/subjectsSlice'
import { setReport } from '../app/reportSlice'

const WrittenReportPage = () => {
    let report:any = useSelector((state:RootState) => state.report.report)
    const [redirect,setRedirect] = useState(false);
    const dispatch = useDispatch();
    const reportId = localStorage.getItem('reportNuber')

    if(redirect){
        return <Navigate to="/userHome" />
    }

    useEffect(() => {
      (async ()=> { 
        try{
          await axios.get(`http://localhost:5000/api/reports/${reportId}`)
        .then((response:any) => {
          const stringData:any = JSON.stringify(response.data)
        //   const editData =stringData.replaceAll("_id","id")
          dispatch(setReport(JSON.parse(stringData)))
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
        } catch(error){}
      }
      )();
      }, []);

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
          Date of Evaluation: {`${report.testDate}`}
          <br />
          Subject Name: {`${report.subjectFirstName} ${report.subjectLastName}`}
          <br />
          DOB: {`${report.birthDate}`}
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
            {`${report.reportDetails.reasoningAbilities}`}
          </p>
          <br />
          <h4>Language Abilities</h4>
          <p className='text-paragraph'>
            {`${report.reportDetails.languageAbilities}`}
          </p>
          <br />
          <h4>Visuospatial Abilities</h4>
          <p className='text-paragraph'>
            {`${report.reportDetails.visuospatialAbilities}`}
          </p>
          <br />
          <h4>Memory</h4>
          <p className='text-paragraph'>
            {`${report.reportDetails.memory}`}
          </p>
          <br />
          <h4>Executive Function</h4>
          <p className='text-paragraph'>
            {`${report.reportDetails.executiveFunction}`}
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
          <thead>
            <tr>
              <th>Composite</th>
              <th>IQ/Composite Scores</th>
              <th>Percentile</th>
              <th>Qualitative Description/Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full Scale IQ</td>
              <td>{`${report.scaledScoreToComposite.fullScale.compositeScore}`}</td>
              <td>{`${report.scaledScoreToComposite.fullScale.percentRank}`}</td>
              <td>{`${compositeRating(Number(report.scaledScoreToComposite.fullScale.compositeScore))}`}</td>
            </tr>
            <tr>
              <td>Verbal Comprehension</td>
              <td>{`${report.scaledScoreToComposite.verbalComprehension.compositeScore}`}</td>
              <td>{`${report.scaledScoreToComposite.verbalComprehension.percentRank}`}</td>
              <td>{`${compositeRating(Number(report.scaledScoreToComposite.verbalComprehension.compositeScore))}`}</td>
            </tr>
            <tr>
              <td>Fluid Reasoning</td>
              <td>{`${report.scaledScoreToComposite.fluidReasoning.compositeScore}`}</td>
              <td>{`${report.scaledScoreToComposite.fluidReasoning.percentRank}`}</td>
              <td>{`${compositeRating(Number(report.scaledScoreToComposite.fluidReasoning.compositeScore))}`}</td>
            </tr>
            <tr>
              <td>Visual-Spatial</td>
              <td>{`${report.scaledScoreToComposite.visuoSpacial.compositeScore}`}</td>
              <td>{`${report.scaledScoreToComposite.visuoSpacial.percentRank}`}</td>
              <td>{`${compositeRating(Number(report.scaledScoreToComposite.visuoSpacial.compositeScore))}`}</td>
            </tr>
            <tr>
              <td>Working Memory</td>
              <td>{`${report.scaledScoreToComposite.workingMemory.compositeScore}`}</td>
              <td>{`${report.scaledScoreToComposite.workingMemory.percentRank}`}</td>
              <td>{`${compositeRating(Number(report.scaledScoreToComposite.workingMemory.compositeScore))}`}</td>
            </tr>
            <tr>
              <td>Processing Speed</td>
              <td>{`${report.scaledScoreToComposite.processingSpeed.compositeScore}`}</td>
              <td>{`${report.scaledScoreToComposite.processingSpeed.percentRank}`}</td>
              <td>{`${compositeRating(Number(report.scaledScoreToComposite.processingSpeed.compositeScore))}`}</td>
            </tr>
          </tbody>
          </table>
          <br />
          <br />
          <br />
          <br />
          <table>
            <caption>WISC-V Subtest Scaled Scores</caption>
            <thead>
              <tr>
                <th>Subtests</th>
                <th>Scaled Scores</th>
                <th>Qualitative Description/Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vocabulary</td>
                <td>{`${report.vocabulary.scaledScore}`}</td>
                <td>{`${scaledRating(Number(report.vocabulary.scaledScore))[0]}`}</td>
              </tr>
              <tr>
                <td>Similarities</td>
                <td>{`${report.similarities.scaledScore}`}</td>
                <td>{`${scaledRating(Number(report.similarities.scaledScore))[0]}`}</td>
              </tr>
              <tr>
                <td>Matrix Reasoning</td>
                <td>{`${report.matrixReasoning.scaledScore}`}</td>
                <td>{`${scaledRating(Number(report.matrixReasoning.scaledScore))[0]}`}</td>
              </tr>
              <tr>
                <td>Figure Weights</td>
                <td>{`${report.figureWeights.scaledScore}`}</td>
                <td>{`${scaledRating(Number(report.figureWeights.scaledScore))[0]}`}</td>
              </tr>
              <tr>
                <td>Block Design</td>
                <td>{`${report.blockDesign.scaledScore}`}</td>
                <td>{`${scaledRating(Number(report.blockDesign.scaledScore))[0]}`}</td>
              </tr>
              <tr>
                <td>Visual Puzzles</td>
                <td>{`${report.visualPuzzles.scaledScore}`}</td>
                <td>{`${scaledRating(Number(report.visualPuzzles.scaledScore))[0]}`}</td>
              </tr>
              <tr>
                <td>Digit Span</td>
                <td>{`${report.digitSpan.scaledScore}`}</td>
                <td>{`${scaledRating(Number(report.digitSpan.scaledScore))[0]}`}</td>
              </tr>
              <tr>
                <td>Picture Span</td>
                <td>{`${report.pictureSpan.scaledScore}`}</td>
                <td>{`${scaledRating(Number(report.pictureSpan.scaledScore))[0]}`}</td>
              </tr>
              <tr>
                <td>Coding</td>
                <td>{`${report.coding.scaledScore}`}</td>
                <td>{`${scaledRating(Number(report.coding.scaledScore))[0]}`}</td>
              </tr>
              <tr>
                <td>Symbol Search</td>
                <td>{`${report.symbolSearch.scaledScore}`}</td>
                <td>{`${scaledRating(Number(report.symbolSearch.scaledScore))[0]}`}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <p className='text-paragraph'>
            Evaluator's Name: {`${report.psychologistFirstName} ${report.psychologistLastName}`}
            <br />
            Date of Report: {`${report.testDate}`}
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