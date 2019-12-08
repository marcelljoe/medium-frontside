import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Img from 'react-image';
import {Fade, Backdrop, Modal, makeStyles, Grid, Container, Button, Menu, TextField, Link} from '@material-ui/core';
import './App.css';


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    width: 'auto',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" type="button" onClick={handleOpen}>
        Getting Started
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <Grid
      justify="center"
      container
      >
      <Grid
      item xs={3}
      direction="column"
      justify="center"
      alignItems="flex-end">

        <Img src="./leftimg.png" width="214" height="550"/>
      </Grid>
      <Grid
        item xs={5}
        direction="column"
        justify="flex-start"
        alignItems="center">
        
        <h2>Join Medium.</h2>
        <h4>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</h4>
        <TextField id="standard-basic" label="Fullname"/>
        <br/>
        <TextField id="standard-basic" label="Username"/>
        <br/>
        <TextField id="standard-basic" label="Password" type="password"/>
        <br/><br/>
        <Button variant="outlined" color="primary">Register</Button>
        <br/><br/>
        <Link href="###">Already registered? Click here to Log In.</Link>
        </Grid>
        <Grid
        item xs={3}
          direction="column"
          justify="center"
          alignItems="flex-start"
          ><Img src="./rightimg.png" width="214" height="550"/>
        </Grid>
        </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

class App extends Component {
  render(){
  return (
    <div className="App">
      <Header />
      {/* <Content /> */}
    </div>
  );
  }
}
class Header extends Component {
  render(){
    return (
      <div className="container">
        <div class="pallet" id="boxzone">
        </div>
        <div class="subpallet"> 
        </div>
      </div>
    );
  }
}


