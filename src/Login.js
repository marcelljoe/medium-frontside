import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Form, Input, Grid, Image, Button, Header, Icon, Modal} from 'semantic-ui-react';
import './App.css';
import { EditorFormatAlignCenter } from 'material-ui/svg-icons';



const columns = _.times(16, (i) => (
    <Grid.Column key={i}>
    <Image src='/images/wireframe/image.png' />
    </Grid.Column>
))
const InputExampleInput = () => <Input placeholder=""/>


const GridExampleGrid = () => 
<Grid>{columns}</Grid>

export default class Login extends Component{
    
    userData;
    
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

        this.state = {
            Username: '',
            Password: ''
        }
    }

    onChangeUsername(e){
        this.setState({ Username: e.target.value})
    }

    onChangePassword(e){
        this.setState({ Password: e.target.value})
    }
   
    onSubmit(e){
        e.PreventDefault()
        console.log(this.state.props)
    }
    
    componentDidMount(){
        this.uderData = JSON.parse(localStorage.getItem('Username'));
        
        if(localStorage.getItem('user')) {
            this.setState({
                Username: this.userData.Username,
                Password: this.userData.Password
            })
        }else{
            this.setState({
                Username:'',
                Password:''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('Username', JSON.stringify(nextState));
    }

    render(){
        return (
            
            <Modal trigger={<Button floated="right">Login</Button>} size="small" closeIcon>
                <div class="ui form">
                    <br/>
                        <div align="center">
                            <div class="seven wide field">
                            <h2 align="center">Sign in with Email.</h2>
                            <h4 align="center">
                            Enter the email address associated with your account, and we’ll send a magic link to your inbox.
                            </h4>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Field align="center">
                                    <Input size="small" type="text" placeholder="Username" value={this.state.Username} onChange={this.onChangeUsername} />
                                </Form.Field>
                                <Form.Field align="center">
                                    <Input size="small" type="password" placeholder="Password" value={this.state.Password} onChange={this.onChangePassword} />
                                </Form.Field>
                                <Form.Field align="center">
                                    <Button type="submit" color="black" size="small">Sign In</Button>
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