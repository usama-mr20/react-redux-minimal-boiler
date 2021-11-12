import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));


const mapStateToProps = ( state ) => {
    return {
        value: state.value,
    }
};

const Menu = ({value, dispatch}) => {
  const classes = useStyles();

    return (
    <div>
    
            <ButtonGroup variant="text"
             color="primary" 
             aria-label="text primary button group" 
             fullWidth={true} 
             size='large'>
                <Button onClick={()=> dispatch({ type: 'INCREMENT' })}> Increment</Button>
                <Button onClick={()=> dispatch({ type: 'DECREMENT' })}> Decrement</Button>
            </ButtonGroup>
<br/>
        <div className={classes.paper}>
          <Paper variant="outlined" elevation={3}>
            <Typography variant="h6" align="center" >
                Counter Value
            </Typography>
<br/>
            <Typography variant="h2" align="center" >
                {value}
            </Typography>
          </Paper>
        </div>
      
    </div> 
);
}
 
export default connect( mapStateToProps )(Menu);