import { intro, higherLower, strengthWeakness } from '../frontendUtilities/generateVaReport';
import Grid from '@mui/material/Grid2';

const VisuospatialAbilitiesReport = () => {

    return (
        <>
            <Grid container size={12} spacing={2}>
                <p className='text-paragraph'>
                    {`${intro()} ${higherLower()} ${strengthWeakness()}`}
                </p>
            </Grid>
        </>
    )
}

export default VisuospatialAbilitiesReport