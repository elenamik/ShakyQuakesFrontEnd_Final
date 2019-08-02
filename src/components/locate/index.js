import React, {useState} from 'react';
import Map from './Map'
import QueryForm from './QueryForm'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useGenericStyles from '../../styles/genericStyles';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useSpecialStyles= makeStyles(theme=>({
  instrucs:{
    marginTop:theme.spacing(1),
    fontWeight:'bold'
  },
  toUse:{
    fontWeight:'bold',
  }
}));

function Locate() {
  let [data,setData]=useState([])
  const generic=useGenericStyles()
  const special=useSpecialStyles();

  function updateMap(db_data){
    setData(db_data)
    return data
  }

  return (
    <div className={generic.container}>
        <Typography variant="h4" className={generic.pageTitle}>
          Locate Victims
        </Typography>
        <Box className={generic.text}>
          <div>The usage of this tool is intended for rescue team with first responders to find locations of possible earthquake victims. The location coordinates are obtained by using a Artificial Intelligence powered thermal drone. 
            <Link target="_blank" rel="noopener" href="https://github.com/ps9918/ShakyQuakes/blob/master/human_detection_model/human_detection_model.ipynb"> Check out our github to learn more about the algorithm.</Link></div>
          <div className={special.instrucs}>
            <span className={special.toUse}>To use: </span>
            Fill in the timeframe you are interested in and click 'Search'
          </div>
        </Box>  
        <QueryForm updateMap={updateMap}/>
        <Map data={data}/>
      
     
   
    </div>
  );
}

export default Locate;

