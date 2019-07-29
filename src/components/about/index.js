import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useGenericStyles from '../../styles/genericStyles';
import { makeStyles } from '@material-ui/core/styles';
const darkblue='rgba(51,80,212)'
const darkblueBG='rgba(51,80,212)'

const useSpecialStyles= makeStyles(theme=>({

  aboutTitle:{
    color:darkblueBG,
    fontFamily: ['Lato', 'sans-serif'],
    margin:'0',
    fontWeight:'bold',
    textAlign:'center',
    padding:'2%'

  },
  subtitle:{
    padding:theme.spacing(1),
    margin:theme.spacing(1),
    marginLeft:theme.spacing(1),
    color:darkblue,
    fontFamily: ['Lato', 'sans-serif']
  },
  number:{
    fontWeight:'bold',
    marginRight:'.6%'
  }
}));

function About(){
    const generic=useGenericStyles()
    const special=useSpecialStyles()
    return(
      <Fragment>
        <div className={special.specialContainer}>
          <Typography variant="h3" className={special.aboutTitle}>
                  About Shaky Quakes
          </Typography>
        </div> 
        <div className={generic.container}>
              
                <Typography variant="h4" className={generic.pageTitle}>
                The Problem
                </Typography>
                <Box className={generic.text}>
                Earthquakes have always posed a dangerous, unavoidable, and unpredictable threat. 
                Today, they are detected using seismic waves coming from the earthquake. The waves will only sensed once the earthquake is already happening, which provides a warning of a few minutes at maximum.
                On top of this, due to the potential damage to terrain and civic systems, it can be extremely difficult and dangerous to find survivors in the debris.
                Even if we can locate survivors within the first 24hours of a destructive earthquake, it will save their life.
                </Box>
                <Typography variant="h4" className={generic.pageTitle}>
                Our Solution
                </Typography>
                <Box className={generic.text}>
                While we do not have the ability to control these natural disasters, we have every ability to leverage today's technology to improve the prepartion and response.
                With our project 'Shaky Quakes', we hope to deliver and build out an earthquake detection and rescue assistance tool. 
                Lucky for us, there is modern research being done to predict earthquakes, and we have the technology of our century which can accomplish things never imagined before.
                </Box>
                <Box className={generic.text}>
                PLEASE NOTE: This project is still in its early stages, and uses simulated data to provide a proof of concept.
                We are currently not in possession of any hardware and are utilizing limited resources to create our system and train our machine learning algorithms.
                </Box>
                <Typography variant="h5" className={special.subtitle}>
                <span className={special.number}>1.</span> Improving Earthquake Prediction
                </Typography>
                <Box className={generic.text}>
                Earthquakes are a complex problem. The usual method used to predict an earthquake is with seismic waves as the earthquake occurs.
                Lucky for us, modern research is reported that there are other indicating factors which can help us gain some insight about the possibility of an earthquake.
                Some of these factors are underground methane anomalies, radon anomalies, ultrasonic sounds generated underground, and temperature differences.
                We will be using these along with seismic waves to more accurately predict when an earthquake might occur. 
                </Box>
                <Box className={generic.text}>
                The 'Enroll' part of our site gives users the option to opt in to alerts (via SMS or email), in the situtation a possible earthquake. 
                Our data analysis algorithm is intended to run regularly on our server, and will send messages to our enrolled recipients as needed.
                </Box>
                <Box className={generic.text}>
                Although this environmental data is currently simulated, and is modeled on data provided by environmental organizations.
                our long term goal is to set up an IOT network of sensors to track this is earthquake-prone areas, train our algorithms, and make predictions.
                This will open up a huge opportunity for research, and will allow us to make more accurate and intelligent predictions.
                </Box>
                <Typography variant="h5" className={special.subtitle}>
                <span className={special.number}>2.</span> A Safe and Simple Way to Aid Rescue
                </Typography>
                <Box className={generic.text}>
                The second part of this system is dedicated to locating possible survivors in the case of an earthquake.
                Rather than searching on foot, which can be slow and unsafe, we want to us a thermal-sensing drone which can fly above damaged ground and quickly detect the locations of humans.
                Survivors would be detected through an AI-powered algorithm, which will indicate whether or not a human is found and submit it to our system accordingly.
                From here, rescue teams can access the detected locations, dramatically speed up the rescue process, and save more lives!
                </Box>
                <Box className={generic.text}>
                The 'Locate' part of our site gives first responders a way to view and filter this information.
                Anything found by the drone can be viewed in our site, and can dramatically speed up the process in finding and rescuing earthquake victims.
                </Box>
                <Typography variant="h4" className={generic.pageTitle}>
                Future Goals
                </Typography>
                <Box className={generic.text}>
                Some future goals we have to grow this project are to integrate physical hardware into the system, such as sensors and thermal imaging drones.
                On top of this, we hope to build out the first responder section into a communication interface, which would allow users to write updates and interact with eachother.
                </Box>
                <Typography variant="h4" className={generic.pageTitle}>
                IBM Call for Code
                </Typography>
                <Box className={generic.text}>
                This project is being worked on in response to IBM's Call for Code Initiative. We want to give a special thanks to IBM for encouraging the use of technical skills
                to improve our world, and thanks for the opportunity to work on this challenge.              
                </Box>
            </div>
      </Fragment>
    )
}

export default About;