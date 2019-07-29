import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useGenericStyles from '../../styles/genericStyles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function DisplayCard(props){
    const special=useSpecialStyles();
    const generic=useGenericStyles()

    console.log(props)
    return(
        <Card className={special.card}>
            <Typography variant="h5" className={generic.pageTitle}>
                Region: Bosnia and Herzegovina
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Parameter</TableCell>
                        <TableCell>Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Temperature</TableCell>
                        <TableCell>20C</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Methane Levels</TableCell>
                        <TableCell>1.8ppm</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Radon Levels</TableCell>
                        <TableCell>22kbqm3</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    )
}


export default DisplayCard;

const useSpecialStyles= makeStyles(theme=>({
    card:{
       width:'50%',
       margin:'auto',
    }
  }));
  