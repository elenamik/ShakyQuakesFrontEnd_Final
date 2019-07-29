import React, {useState} from './node_modules/react';
import Typography from './node_modules/@material-ui/core/Typography';
import Box from './node_modules/@material-ui/core/Box';
import useGenericStyles from '../../styles/genericStyles';
import Button from './node_modules/@material-ui/core/Button';
import axios from './node_modules/axios';
import './loading.css';
import url from '../../static/env';


function UploadPhoto(){
    const [imgURL, setImgURL]= useState("")
    const [loading,setLoading]=useState(false)
    const [file,setFile]=useState(null)
    const [successMessage, setSuccessMessage]=useState("")
    const generic=useGenericStyles()

    
    function handleChange(event){
        const inputfile=event.target.files[0]
        setImgURL(URL.createObjectURL(inputfile))
        setFile(inputfile)
        console.log(inputfile)
        console.log("CHANGED GILE")
    }
    function handleClick(){
        setLoading(true)
        const formData= new FormData()
        formData.append('image',file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post({
            url,
            formData,
            config
        }).then(res=>{
            // if dates returned, must inject into context
            console.log("request response:",res.data)
            if (res.data.results[3]==="TRUE"){
                setLoading(false)
                setSuccessMessage(`${file.name} is a human, saved in DB as ____`)
            }
            else{
                setSuccessMessage(`${file.name} is not a human, discarded`)
            }
            

        }).catch(err=>{
            // if there was a failure, have error message render
            console.log("ERROR",err)

        })

    }
    return(
        <div className={generic.container}>
                <Typography variant="h4" className={generic.pageTitle}>
                    Upload Photo
                </Typography>
                <Box className={generic.text}>  
                    *** This section is for the Proof of Concept for human detection in a drone-captured image ***
                </Box>
                <Button
                    containerElement='label' // <-- Just add me!
                    label='My Label'>
                    <input type="file" onChange={handleChange} />
                </Button>
                <img src={imgURL} alt="Pic"/>

                { loading && <div class="lds-dual-ring"></div>}

                {!loading && <Button onClick={handleClick}>analyze</Button>}
                <div>{successMessage}</div>

        </div>
    )
}

export default UploadPhoto;