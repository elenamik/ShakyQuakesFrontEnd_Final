import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useGenericStyles from '../../styles/genericStyles';



function Predictions(){
    const generic=useGenericStyles()
    
    return(
        <div className={generic.container}>
                <Typography variant="h4" className={generic.pageTitle}>
                    Predictions
                </Typography>
                <Box className={generic.text}>  
                    This section will show predictions and data
                </Box>
        </div>
    )
}

export default Predictions;