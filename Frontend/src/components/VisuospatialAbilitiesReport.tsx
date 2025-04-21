import { TextField, Button } from '@mui/material';
import { useState, SyntheticEvent } from 'react';
import { intro, higherLower, strengthWeakness } from '../frontendUtilities/generateVaReport';
import Grid from '@mui/material/Grid2';

const VisuospatialAbilitiesReport = () => {

    const [reportText,setReportText] = useState(`${intro()} ${higherLower()} ${strengthWeakness()}`);
    const [edit,setEdit] = useState(false);
    
    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();
        setEdit(!edit);
    }

    return (
        <>
            <Grid container size={12} spacing={2}>
                <h4>Visuospatial Abilities</h4>
                {edit && <TextField
                    required
                    margin='normal'
                    fullWidth
                    multiline
                    id='introText'
                    value={reportText}
                    onChange={(Event) => setReportText(Event.target.value)}
                />
                }
                {edit && <Button variant="contained" onClick={(e)=>{submit(e)}}>
                        Save
                    </Button>
                }
                {!edit && <p className='text-paragraph'>
                    {`${reportText}`}
                </p>
                }
                {!edit && <Button variant="contained" onClick={(e)=>{submit(e)}}>
                        Edit
                    </Button>
                }
            </Grid>
        </>
    )
}

export default VisuospatialAbilitiesReport