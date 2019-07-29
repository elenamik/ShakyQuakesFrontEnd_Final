import React, {Fragment, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import URL from '../../static/env';
import '../../styles/loading.css';

const locateURL=`${URL}/locate/getLocations`

function QueryForm(props){
    const [error,setError]=useState(false)
    const startDate=useFormInput(getDate("start"));
    const endDate=useFormInput(getDate("end"));
    const startTime=useFormInput("00:00:00");
    const endTime=useFormInput("23:59:59");
    const special=useSpecialStyles();
    const [loading,setLoading]=useState(false)


    function handleSubmit(){
        setLoading(true)
        const startTS=`${startDate.value} ${startTime.value}`
        const endTS=`${endDate.value} ${endTime.value}`
        console.log(`fetching data between ${startTS} and ${endTS}`)
        console.log("Request sent to",locateURL)

        axios({
            url:locateURL,
            params:{
                lowerBound:startTS,
                upperBound:endTS
            }
        }).then(res=>{
            // if dates returned, inject into context
            console.log("Data request response:",res.data)
            setLoading(false)
            props.updateMap(res.data.locations);
        }).catch(err=>{
            // if there was a failure, have error message render
            console.log("LOGGING ERROR",err)
            setError(err)

        })
    }
    
    return(
        <Fragment>
        <div className={special.queryForm}>
            <div className={special.inputs}>
                <span className={special.queryInput}> <TextField label='From:' variant="outlined" type='date' {...startDate} /> <TextField variant="outlined" type='time' {...startTime}/> </span>
                <span className={special.queryInput}> <TextField label='To:' variant="outlined" type='date' {...endDate}/> <TextField variant="outlined" type='time' {...endTime}/> </span>
                <Button className={special.goButton} variant="outlined" size='medium' onClick={handleSubmit}>Search</Button>
            </div>
        </div>
         {(error) && <div className={special.error}> 
            Connection Error: could not contact server. Please try again later
        </div>}
        { loading && <div class="lds-dual-ring"></div>}
        </Fragment>
    )
}

function useFormInput(initialValue){
    const [value,setValue]=useState(initialValue)
    function handleChange(e){
        setValue(e.target.value);
    }
    return{
        value,
        onChange:handleChange
    }
}


function getDate(type){
    if (type==="start"){
        let date=new Date()
        let year=date.getFullYear()
        let month=date.getMonth()
        let day=date.getDate()
        day=padZero(day);
        month=padZero(month);
        return `${year}-${month}-${day}`
    }
    else{
        let date=new Date()
        let year=date.getFullYear()
        let month=date.getMonth()+1
        let day=date.getDate()
        day=padZero(day);
        month=padZero(month);
        return `${year}-${month}-${day}`
    }
  
}

function padZero(value){
    if (value<=9){
        value=`0${value}`
    }
    return value;
}

export default QueryForm;

const useSpecialStyles= makeStyles(theme=>({
    queryForm:{
      display:'flex',
      justifyContent:'center',
      margin: 'auto',
      width:'80%',
    },
    inputs:{
        display:'flex',
        flexDirection: 'row', 
        justifyContent:'center',
    },
   queryInput:{
       margin:'auto',
       padding:theme.spacing(1)
   },
    goButton:{
        margin:'auto',
        marginLeft:'1em',
        height:'80%',
        backgroundColor:'white',
        '&:hover': {
            borderColor: 'black',
            backgroundColor:'white'
        }
    },
    error:{
        textAlign:'center',
        color:'red'
    }

  }));
  