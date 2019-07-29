import { createMuiTheme } from '@material-ui/core/styles';
import white from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

const muiTheme=createMuiTheme(theme)
export default muiTheme;