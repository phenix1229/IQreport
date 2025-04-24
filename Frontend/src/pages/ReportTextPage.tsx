import ReasoningAbilitiesReport from "../components/ReasoningAbilitiesReport"
import LanguageAbilitiesReport from "../components/LanguageAbilitiesReport"
import VisuospatialAbilitiesReport from "../components/VisuospatialAbilitiesReport"
import MemoryReport from "../components/MemoryReport"
import ExecutiveFunctionReport from "../components/ExecutiveFunctionReport"
import Grid from '@mui/material/Grid2';
import { Button } from "@mui/material"
import { useState } from "react"
import { Navigate } from "react-router-dom"

const ReportTextPage = () => {

    const [redirect,setRedirect] = useState(false);

    if(redirect){
        return <Navigate to="/writtenReportPage" />
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
                <Button variant="contained" onClick={()=>{setRedirect(true)}}>
                        Finish
                </Button>
            </Grid>
        </>
    )
}

export default ReportTextPage