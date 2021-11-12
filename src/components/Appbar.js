import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  bar:{
    alignItems: 'center'
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(2),
 
  },
}));


const Appbar = () => {
     const classes = useStyles();
    return ( 
    
    <AppBar position="static" className={classes.bar}>
        <Typography variant="h6" className={classes.title}>
            Play with redux
          </Typography>
    </AppBar> 
);
}
 
export default Appbar;