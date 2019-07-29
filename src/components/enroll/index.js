import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from '../../styles/genericStyles';
import EnrollForm from './EnrollForm';

function Enroll(){
    const generic=useStyles()
    return(
        <div className={generic.container}>
                <Typography variant="h4" className={generic.pageTitle}>
                    Enroll in Alerts
                </Typography>
                <Box className={generic.text}>
                    If you are interested in receiving alerts based on our predictions, please fill in your information below.
                    We will never use your data for anything other than sending warnings of earthquake detections.
                    Please include at least one form of contact information (in the form of SMS or email)
                </Box>   
                <EnrollForm/>

        </div>
    )
}

export default Enroll;