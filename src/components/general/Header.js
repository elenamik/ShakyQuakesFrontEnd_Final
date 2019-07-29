import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import logo from '../../static/logo.png'


function Header() {
  const classes=useStyles()
  return (
    <div className={classes.header}>
      <AppBar className={classes.header} position='absolute'>
      <img className={classes.logo} src={logo} alt="Logo"/>
        <Toolbar className={classes.toolBar} position='fixed'>
          <Button size='large' component={Link} to="/" className={classes.menuButton}>About</Button>
          <Button size='large'  component={Link} to="/locate" className={classes.menuButton}>Locate</Button>
          <Button size='large' component={Link} to="predictions" className={classes.menuButton}>Predictions</Button>
          <Button size='large' component={Link} to="/enroll" className={classes.menuButton}>Enroll</Button>  
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

const blue='rgba(50,85,242,0.8)'
const lightblue='rgba(50, 85, 242, 0.4)'
const darkblue='rgba(51,80,212,0.70)'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header:{
    backgroundColor:'black',
    position:'sticky'
  },
  logo:{
    height:'25%',
    width:'25%',
    minWidth:'200px',
    marginTop:theme.spacing(1),
    marginBottom:theme.spacing(1.5),
    margin:'auto'
  },
  toolBar:{
    display:'flex',
    justifyContent: 'space-around',
    flexDirection:'row',
    backgroundColor:darkblue,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'white',
    minWidth:'15%',
    fontSize:'1em',
    backgroundColor: blue,
    fontFamily: ['Lato', 'sans-serif'],
    fontWeight:'bold',
    '&:hover': {
      borderColor: 'white',
      backgroundColor:lightblue
    },
    '&:active': {
      backgroundColor: blue,
      color:'white'
    },
    activeMenuButton:{
      marginRight: theme.spacing(2),
      color:blue,
      minWidth:'15%',
      fontSize:'1em',
      backgroundColor: blue,
      color:'white'
    }
  }
}));