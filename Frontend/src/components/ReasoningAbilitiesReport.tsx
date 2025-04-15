import Grid from '@mui/material/Grid2';
import { intro, overView, strengthWeakness } from '../frontendUtilities/generateRaReport';

const ReasoningAbilitiesReport = () => {

    return (
        <>
            <Grid container size={12} spacing={2}>
                <p>
                    {`${intro()} ${overView()} ${strengthWeakness()}`}
                </p>
            </Grid>
        </>
    )
}


export default ReasoningAbilitiesReport