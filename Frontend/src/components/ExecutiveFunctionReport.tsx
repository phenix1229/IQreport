import Grid from '@mui/material/Grid2';
import { intro, higherLower, strengthWeakness } from '../frontendUtilities/generateEfReport';

const ExecutiveFunctionReport = () => {

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