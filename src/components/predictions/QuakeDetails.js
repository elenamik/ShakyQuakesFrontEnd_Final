import React from 'react';
import Typography from '@material-ui/core/Typography';
import DisplayCard from './DisplayCard';
import useGenericStyles from '../../styles/genericStyles';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Map';


function QuakeDetails(props){
    const special=useSpecialStyles();
    const generic=useGenericStyles()


    console.log("getting passed to map:",props.quakeData)
    if (!props.loading){
        const point=props.quakeData[0]
        return(
            <div className="quake-data">
                <div className={special.warningBox}>
                <Typography variant="h3" className={special.warning}>
                    WARNING: 
                </Typography>
                    <div className={special.warningText}>  {props.quakeData.length} radon anomalies detected in region  </div>
                    <div className={special.warningText}> {props.quakeData.length} earthquake detected in region</div>
                </div>

                <div className={special.section}>
                    <DisplayCard data={props.quakeData}/>
                    <Map data={props.quakeData} />
                </div> 
               
            </div>   
        )
    }
    else{
        return( 
            <div className="quake-data">

        <Typography variant="h5" className={generic.pageTitle}>
            No anomalies detected at this time
        </Typography>
        
        <div className={special.section}>
        <DisplayCard data={props.quakeData}/>
        <Map data={props.quakeData} />
        </div> 
        </div>
        )
        
    }

}

export default QuakeDetails;

const useSpecialStyles= makeStyles(theme=>({
    warningBox:{
        backgroundColor:'rgba(255,0,0,0.8)',
        padding:theme.spacing(2),
        margin:theme.spacing(1),
        textAlign:'center',
        color:'white',
        borderRadius:'15%'
    },
    warning:{
      
    },
    section:{
        display:'flex',
        flexDirection:'row'
    },
    warningText:{
        fontSize:'1'
    },
   

  }));
  