import Grid from '@mui/material/Grid2';
import { intro, overView, strengthWeakness } from '../frontendUtilities/generateRaReport';
import { SyntheticEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

const ReasoningAbilitiesReport = () => {

    const [reportText,setReportText] = useState(`${intro()} ${overView()} ${strengthWeakness()}`);
    const [edit,setEdit] = useState(false);
    const [confirmed,setConfirmed] = useState(false);
    
    const reportId = localStorage.getItem('reportId');
    
    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();
        setEdit(!edit);
        if(edit === true){
            setConfirmed(false);
        }
    }

    const confirm = async (e:SyntheticEvent) => {
        e.preventDefault();
        try{
            const oldReport = await axios.get(`http://localhost:5000/api/reports/${reportId}`)
            if(!oldReport.data.reportDetails){
                await axios.put(`http://localhost:5000/api/reports/${reportId}`, {
                    reportDetails:{
                        reasoningAbilities:reportText
                    }
                })
            } else {
                await axios.put(`http://localhost:5000/api/reports/${reportId}`, {
                    reportDetails:{
                        reasoningAbilities:reportText,
                        languageAbilities:oldReport.data.reportDetails.languageAbilities,
                        visuospatialAbilities:oldReport.data.reportDetails.visuospatialAbilities,
                        memory:oldReport.data.reportDetails.memory,
                        executiveFunction:oldReport.data.reportDetails.executiveFunction
                    }
                })
            }
        } catch(error:any){
            alert(error.response.data.message)
        }
        setConfirmed(true);
    }

    return (
        <>
            <Grid container size={12} spacing={2}>
                <h4>Reasoning Abilities</h4>
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
                {!edit && <Button variant="contained" color={!confirmed ? 'error' : 'primary'} onClick={(e)=>{confirm(e)}}>
                        {confirmed ? 'Confirmed' : 'Confirm'}
                    </Button>
                }
            </Grid>
        </>
    )
}


export default ReasoningAbilitiesReport