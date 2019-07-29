import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import logo from '../../static/logo.png'
import useGenericStyles from '../../styles/genericStyles';
import About from '../about/index'

//component={Link} to="/" className={classes.menuButton}

function Footer() {
  const generic=useGenericStyles()
  const special=useSpecialStyles()
  return (
      <div className={special.container}>
        <div className={special.line}>
        </div>
           <div className={special.text}>
         <span className={special.brand}>Shaky Quakes </span> - an IBM <span className={special.ital}>Call For Code</span> Project
         </div>
    </div>
    
  );
}

export default Footer;

const blue='rgba(50,85,242,0.8)'
const lightblue='rgba(50, 85, 242, 0.8)'
const darkblue='rgba(51,80,212)'

const useSpecialStyles = makeStyles(theme => ({
    container:{
        backgroundColor: darkblue,
        fontFamily: ['Lato', 'sans-serif'],
        paddingLeft:theme.spacing(8),
        paddingRight:theme.spacing(8),
        marginTop:'2%',
        paddingTop:'3%',
        paddingBottom:'3%'
    },
  text:{
      color:'white',
      fontSize:'20',
      textAlign:'center'
  },
  brand:{
      fontSize:'1.5em'
  },
  ital:{
      fontWeight:'italic'
  }
}));