import { makeStyles } from '@material-ui/core/styles';
const blue='rgba(50,85,242,0.8)'
const darkblue='rgba(51,80,212)'

const useGenericStyles = makeStyles(theme => ({
    container:{
        marginLeft:theme.spacing(8),
        marginRight:theme.spacing(8),

    },
    pageTitle:{
        padding:theme.spacing(2),
        color:darkblue,
        fontFamily: ['Lato', 'sans-serif'],
        fontWeight:'bold'
    },
    text: {

        margin:theme.spacing(1),
        textAlign:'justify',
        fontFamily: ['Lato', 'sans-serif'],
        fontSize:20
    }
  }));
  
  export default useGenericStyles;