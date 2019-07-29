import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';


function EnrollForm(props){
    const firstName=useFormInput("");
    const lastName=useFormInput("");
    const phone=useFormInput("")
    const email=useFormInput("")
    const [submit,onSubmit]=useState(false)

    
    const special=useSpecialStyles();

    function handleSubmit(){
        axios({
            url:'http://127.0.0.1:5000/enroll',
            params:{
                firstName:firstName.value,
                lastName:lastName.value,
                phone:phone.value,
                email:email.value
            }
        }).then(res=>{
            // if dates returned, must inject into context
            console.log("Submitted enrollment:",res.data)
        }).catch(err=>{
            // if there was a failure, have error message render
            console.log(err)
        })

       firstName.reset()
       lastName.reset()
       phone.reset()
       email.reset()
       onSubmit(true)
       

    }
    
    return(
        <div className={special.form}>
           
            <div className={special.inputs} >
            {
                submit && <div className={special.field}>Enrolled Successfully!</div>
            }
                <TextField className={special.field} label='First Name' variant="outlined" type='text' {...firstName}/>
                <TextField className={special.field} label='Last Name' variant="outlined" type='text' {...lastName}/>
                <TextField className={special.field} label='Phone Number' variant="outlined" type='text' placeholder="1 (800) 123-456" {...phone}/> 
                <TextField className={special.field} label='Email Address' variant="outlined" type='text' placeholder="me@gmail.com" {...email}/> 
                <Button className={special.submit} variant="contained" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
}

function useFormInput(initialValue){
    const [value,setValue]=useState(initialValue)
    function handleChange(e){
        setValue(e.target.value); 
    }
    function reset(){
        setValue("")
    }
    return{
        value,
        onChange:handleChange,
        reset
    }
}


const useSpecialStyles= makeStyles(theme=>({
    form:{
      display:'flex',
      margin:'auto'
    },
    inputs:{
      display:'flex',
      justifyContent:'center',
      flexDirection: 'column',
      margin:'auto',
      minWidth:'40%',
      
    },
    field:{
      margin: theme.spacing(1),
      textAlign:'center'
  
  
    },
    submit:{
      justifyContent:'center'
    }
  }));


export default EnrollForm;