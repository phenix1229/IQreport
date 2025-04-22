import { SyntheticEvent, useState } from 'react';
import { intro, higherLower, strengthWeakness } from '../frontendUtilities/generateMeReport';
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

const MemoryReport = () => {

    const [reportText,setReportText] = useState(`${intro()} ${higherLower()} ${strengthWeakness()}`);
    const [edit,setEdit] = useState(false);
    const [confirmed,setConfirmed] = useState(false);
    
    const reportId = localStorage.getItem('reportId');
    
    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();
        setEdit(!edit);
    }

    const confirm = async (e:SyntheticEvent) => {
        e.preventDefault();
        try{
            await axios.put(`http://localhost:5000/api/reports/${reportId}`, {
                reportDetails:{memory:reportText}
            })
        } catch(error:any){
            alert(error.response.data.message)
        }
        setConfirmed(true);
    }

    return (
        <>
            <Grid container size={12} spacing={2}>
            <h4>Memory</h4>
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
                {!edit && <p className='text-paragraph'>
                    {`${reportText}`}
                </p>
                }
                <Button variant="contained" onClick={(e)=>{submit(e)}}>
                        {edit ? 'Save' : 'Edit'}
                </Button>
                {!edit && <Button variant="contained" onClick={(e)=>{confirm(e)}}>
                        {confirmed ? 'Confirmed' : 'Confirm'}
                    </Button>
                }
            </Grid>
        </>
    )
}


export default MemoryReport