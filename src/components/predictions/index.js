import React, {useEffect,useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useGenericStyles from '../../styles/genericStyles';
import { makeStyles } from '@material-ui/core/styles';
import URL from '../../static/env';
import axios from 'axios';
import QuakeDetails from './QuakeDetails';
import Link from '@material-ui/core/Link';
import DisplayCard from './DisplayCard';
import '../../styles/loading.css';



const predictURL=`${URL}/python/predict`;


function Predictions(){
    const [quakeData,setQuakeData]=useState([])
    const [error,setError]=useState(null)
    const special=useSpecialStyles();
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        axios({
            url:predictURL
        }).then(res=>{
            // if dates returned, inject into context
            console.log("Data request response:",res.data)
            setLoading(false)
            setQuakeData(res.data.quake_info)
            console.log("quake data from response in index",quakeData)

        }).catch(err=>{
            // if there was a failure, have error message render
            console.log("LOGGING ERROR",err)
            setError(err)
        })
    },[]) //can remove empty array to have front end query constantly for updates
    const generic=useGenericStyles()
    
    return(
        <div className={generic.container}>
            <Typography variant="h4" className={generic.pageTitle}>
                Predictions
            </Typography>
            <Typography variant="h6" className={generic.pageTitle}>
                Note: the data on this page is a proof of concept only, and is using simulated data
            </Typography>
            <Box className={generic.text}>  
                This page is a proof of concept using simulated results to detect environmental anomalies. 
                Currently, earthquake detection and prediction relies almost totally on seismic waves.
                However, modern research is finding that there are many other environmental factors which are linked to an earthquake occuring.
                Some of these factors are radon and methane levels, temperature differences, and ultrasonic sounds.
            </Box>
            <Box className={generic.text}>  
                In this example, we are using a machine learning algorithm to read simulated data and detect anomalies.
                The below warning suggests our algorithm has detected a significant change in radon.
                Although this warning is not based on real data, our end goal is to set up a network of IOT sensors, 
                which will record this data and feed it into our system. 
                <Link target="_blank" rel="noopener" href="https://github.com/ps9918/ShakyQuakes/blob/master/Radon_and_Earthquakes/earthquakes_radon_anomaly.ipynb"> To see more on how this works, take a look at our github.</Link>
            </Box>

            {(error) && 
            <div className={special.error}> 
                Connection Error: could not contact server. Please try again later
            </div>}
         
            { loading && <div class="lds-dual-ring"></div>}
    
            <QuakeDetails quakeData={quakeData} loading={loading}/>
        </div>
    )
}

export default Predictions;

const useSpecialStyles= makeStyles(theme=>({
    error:{
        textAlign:'center',
        color:'red'
    }
  }));
  