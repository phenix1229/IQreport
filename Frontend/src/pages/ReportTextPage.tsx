import ReasoningAbilitiesReport from "../components/ReasoningAbilitiesReport"
import LanguageAbilitiesReport from "../components/LanguageAbilitiesReport"
import VisuospatialAbilitiesReport from "../components/VisuospatialAbilitiesReport"
import MemoryReport from "../components/MemoryReport"
import ExecutiveFunctionReport from "../components/ExecutiveFunctionReport"
import Grid from '@mui/material/Grid2';

const ReportTextPage = () => {

    return (
        <>
            <br />
            <br />
            <hr />
            <h3>Cognitive Assessment Results</h3>
            <hr />
            <Grid container size={12} spacing={2}>
                <ReasoningAbilitiesReport />
                <LanguageAbilitiesReport />
                <VisuospatialAbilitiesReport />
                <MemoryReport />
                <ExecutiveFunctionReport />
            </Grid>
        </>
    )
}

export default ReportTextPage