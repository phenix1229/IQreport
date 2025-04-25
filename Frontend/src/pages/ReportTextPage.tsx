import ReasoningAbilitiesReport from "../components/ReasoningAbilitiesReport"
import LanguageAbilitiesReport from "../components/LanguageAbilitiesReport"
import VisuospatialAbilitiesReport from "../components/VisuospatialAbilitiesReport"
import MemoryReport from "../components/MemoryReport"
import ExecutiveFunctionReport from "../components/ExecutiveFunctionReport"
import Grid from '@mui/material/Grid2';
import { Button } from "@mui/material"
import { SyntheticEvent, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setReport } from "../app/reportSlice"
import { setAuth } from "../app/authSlice"
import { RootState } from "../app/store"

const ReportTextPage = () => {

    const dispatch = useDispatch();
        
    useEffect(()=>{
        if(sessionStorage.user){
        dispatch(setAuth(true))
        }
    });

    const auth:boolean = useSelector((state:RootState) => state.auth.value)
    

    const reportId = localStorage.getItem("reportId");

    const finish = async (e:SyntheticEvent) => {
        e.preventDefault();
        const updatedReport = await axios.get(`http://localhost:5000/api/reports/${reportId}`);
        dispatch(setReport({
            subjectFirstName: updatedReport.data.subjectFirstName,
            subjectLastName: updatedReport.data.subjectLastName,
            psychologistFirstName: updatedReport.data.psychologistFirstName,
            psychologistLastName: updatedReport.data.psychologistLastName,
            testDate: updatedReport.data.testDate,
            birthDate: updatedReport.data.birthDate,
            testAge: updatedReport.data.testAge,
            blockDesign: updatedReport.data.blockDesign,
            similarities: updatedReport.data.similarities,
            matrixReasoning: updatedReport.data.matrixReasoning,
            digitSpan: updatedReport.data.digitSpan,
            coding: updatedReport.data.coding,
            vocabulary: updatedReport.data.vocabulary,
            figureWeights: updatedReport.data.figureWeights,
            visualPuzzles: updatedReport.data.visualPuzzles,
            pictureSpan: updatedReport.data.pictureSpan,
            symbolSearch: updatedReport.data.symbolSearch,
            scaledScoreToComposite: updatedReport.data.scaledScoreToComposite,
            reportDetails: updatedReport.data.reportDetails
        }))
        setRedirect(true)
    }

    const [redirect,setRedirect] = useState(false);

    if(redirect){
        return <Navigate to="/writtenReportPage" />
    }

    
    if(!auth){
        return (
        <h2>Access denied</h2>
        )
    }

    return (
        <>
            <br />
            <br />
            <hr />
            <h3>Cognitive Assessment Results</h3>
            <hr />
            <p><strong><mark>Please review all results and edit if needed before confirming.</mark></strong></p>
            <Grid container size={12} spacing={2}>
                <ReasoningAbilitiesReport />
                <LanguageAbilitiesReport />
                <VisuospatialAbilitiesReport />
                <MemoryReport />
                <ExecutiveFunctionReport />
                <Button variant="contained" onClick={(e)=>{finish(e)}}>
                        Finish
                </Button>
            </Grid>
        </>
    )
}

export default ReportTextPage