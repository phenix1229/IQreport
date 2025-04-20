import Grid from '@mui/material/Grid2';
import { intro, overView, strengthWeakness } from '../frontendUtilities/generateRaReport';

const ReasoningAbilitiesReport = () => {

    return (
        <>
            <Grid container size={12} spacing={2}>
                <h4>Reasoning Abilities</h4>
                <p className='text-paragraph'>
                    {`${intro()} ${overView()} ${strengthWeakness()}`}
                </p>
            </Grid>
        </>
    )
}


export default ReasoningAbilitiesReport