import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Form, Input, Grid, Image, Button, Header, Icon, Modal} from 'semantic-ui-react';
import './App.css';
import { EditorFormatAlignCenter } from 'material-ui/svg-icons';
import axios from 'axios';


const columns = _.times(16, (i) => (
    <Grid.Column key={i}>
    <Image src='/images/wireframe/image.png' />
    </Grid.Column>
))
const InputExampleInput = () => <Input placeholder=""/>


const GridExampleGrid = () => 
<Grid>{columns}</Grid>

export default class Login extends Component{
    
    // userData;
    
    constructor(props){
        super(props);

        // this.onSubmitLogin = this.onSubmitLogin.bind(this);

        this.state = {
            fullname:'',
            email: '',
            password: '',
            isLoggedIn: ''
        }
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value})
    }

    onChangePassword = (e) => {
        this.setState({ password: e.target.value})
    }
   
    onSubmitLogin = (e) => {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        console.log(this.state.email);
        axios
          .post("http://localhost:4000/api/v1/login", {
            email,
            password
          })
          .then(res => {
            localStorage.setItem("email", email);
            localStorage.setItem("fullname", res.data.fullname);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("isLoggedIn", 1)
          });
          window.location.reload();
    }
    
    componentDidMount(){
        // this.userData = JSON.parse(localStorage.getItem('users'));
        
        if(localStorage.getItem('users')) {
            this.setState({
                fullname: localStorage.fullname,
                email: localStorage.email,
                password: localStorage.password
            })
        }else{
            this.setState({
              fullname:'',
                email:'',
                password:''
            })
        }

    }
// INI CARA LOGIN
    // handleLogin = () => {
    //     axios.post("http://localhost:4000/api/v1/login", {email: this.state.email, password: this.state.password})
    //     .then(res => {
    //         localStorage.setItem("token", res.data.token)
    //         localStorage.setItem("email", res.data.email)
    //     })
    // }

    // componentWillUpdate(nextProps, nextState) {
    //     localStorage.setItem('users', JSON.stringify(nextState));
    // }

    render(){
        return (
          <Modal trigger={<Button floated="right">Login</Button>} size="small" closeIcon>
            <div class="ui form">
              <br />
              <div align="center">
                <div class="seven wide field">
                  <h2 align="center">Sign in with Email.</h2>
                  <h4 align="center">
                    Enter the email address associated with your account, and
                    we’ll send a magic link to your inbox.
                  </h4>
                  <Form onSubmit={this.onSubmitLogin}>
                    <Form.Field align="center">
                      <Input
                        size="small"
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                      />
                    </Form.Field>
                    <Form.Field align="center">
                      <Input
                        size="small"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                      />
                    </Form.Field>
                    <Form.Field align="center">
                      <Button type="submit" color="black" size="small">
                        Sign In
                      </Button>
                    </Form.Field>
                    <Form.Field align="center">
                      <a href="###">All sign in options</a>
                    </Form.Field>
                    <Form.Field></Form.Field>
                  </Form>
                </div>
              </div>
            </div>
          </Modal>
        );
    }
}