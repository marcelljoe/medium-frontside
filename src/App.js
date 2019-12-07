import React,{Component} from 'react';
import ReactDOM from "react-dom";
import Img from 'react-image';
import {Grid, Container, Button, Menu, TextField, Link} from '@material-ui/core';
import './App.css';


class App extends Component {
  render(){
  return (
    <div className="App">
      <Header />
      <Content />
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
class Content extends Component {
  render(){
    return (
      
      <Grid
      container
      spacing={3}
      justify="center"
      alignItems="center"
      >
      <Grid
      item xs={3}
      direction="column"
      justify="center"
      alignItems="flex-end"
      >
        <Img src="./leftimg.png" width="214" height="550"/>
      </Grid>
      <Grid
        item xs={3}
        direction="column"
        justify="center"
        alignItems="center">
        <h2 class="signuptitle">Join Medium.</h2>
        <h4 class="signupsubtitle">Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</h4>
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
    );
  }
}

//<div id="susi-modal-left-image"><div class="ll u f"><img alt="" class="" src="https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png" width="214" height="550" role="presentation"/></div></div>
//<div class="kk" id="susi-modal-right-image"><div class="ll u f"><img alt="" class="" src="https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png" width="214" height="550" role="presentation"></div></div>        

export default App;
