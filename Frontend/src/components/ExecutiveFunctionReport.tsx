import Grid from '@mui/material/Grid2';
import { intro, higherLower, strengthWeakness } from '../frontendUtilities/generateEfReport';

const ExecutiveFunctionReport = () => {

    // const subject = JSON.stringify(localStorage.getItem('subjectFirstName'));
    // const gender = JSON.stringify(localStorage.getItem('gender'));
    // const coScaledScore = JSON.stringify(localStorage.getItem('coScaledScore'));
    // const ssScaledScore = JSON.stringify(localStorage.getItem('ssScaledScore'));

    return (
        <>
            <Grid container size={12} spacing={2}>
                <p>
                    {`${intro()} ${higherLower()} ${strengthWeakness()}`}  
                </p>
            </Grid>
        </>
    )
}

export default ExecutiveFunctionReport