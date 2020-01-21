import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Form, Input, Grid, Image, Button, Header, Icon, Modal} from 'semantic-ui-react';
import Login from './Login';
import './App.css';
import axios from 'axios';


const columns = _.times(16, (i) => (
    <Grid.Column key={i}>
    <Image src='/images/wireframe/image.png' />
    </Grid.Column>
))
const InputExampleInput = () => <Input placeholder=""/>

const GridExampleGrid = () => 
<Grid>{columns}</Grid>

export default class Registration extends Component {
                 constructor(props) {
                   super(props);
                  //  this.onSubmit = this.onSubmit.bind(this);

                   this.state = {
                     fullname: '',
                     email: '',
                     password: '',
                     isLoggedIn: ''
                    };
                 }

                 onChangeFullname = (e) => {
                   this.setState({ fullname: e.target.value });
                 };

                 onChangeEmail = (e) => {
                   this.setState({ email: e.target.value });
                 };

                 onChangePassword = (e) => {
                   this.setState({ password: e.target.value });
                 };

                 onSubmit = (e) => {
                   axios
                     .post("http://localhost:4000/api/v1/register", {
                       fullname: this.state.fullname,
                       email: this.state.email,
                       password: this.state.password
                     })
                     .then(res => {
                       localStorage.setItem("token", res.data.token);
                       localStorage.setItem("email", res.data.email);
                     });
                 }

                 componentDidMount() {
                  //  this.userData = JSON.parse(localStorage.getItem("Fullname"));

                   if (localStorage.getItem("user")) {
                     this.setState({
                       fullname: this.state.fullname,
                       email: this.state.email,
                       password: this.state.password
                     });
                   } else {
                     this.setState({
                       email: '',
                       password: ''
                     });
                   }
                 }

                //  componentWillUpdate(nextProps, nextState) {
                //    localStorage.setItem("Fullname", JSON.stringify(nextState));
                //  }

                 render() {
                   return (
                     <Modal
                       trigger={<Button style={{marginRight: '5px'}}>Register</Button>}
                       size="medium"
                     >
                       <Grid columns={3} verticalAlign="top">
                         <Grid.Row>
                           <Grid.Column>
                             <Image
                               floated="left"
                               verticalAlign="top"
                               src="https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png"
                             />
                           </Grid.Column>
                           <Grid.Column width={5.7}>
                             <div>
                               <br />
                               <h2 align="center">Join Medium.</h2>
                               <h4 align="center">
                                 Create an account to receive great stories in
                                 your inbox, personalize your homepage, and
                                 follow authors and topics that you love.
                               </h4>
                               <Form onSubmit={this.onSubmit}>
                                 <Form.Field align="center">
                                   <Input
                                     size="small"
                                     type="text"
                                     placeholder="Fullname"
                                     value={this.state.fullname}
                                     onChange={this.onChangeFullname}
                                   />
                                 </Form.Field>
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
                                   <Button color="black" size="small" type="submit">
                                     Register
                                   </Button>
                                 </Form.Field>
                                 <Form.Field align="center">
                                   <h4>
                                     Already have an Account? <Login />
                                   </h4>
                                   <h4>
                                     To make Medium work, we log user data and
                                     share it with service providers. Click
                                     “Sign Up” above to accept Medium’s
                                     <a href="###">Terms of Service</a>&
                                     <a href="###">Privacy Policy</a>
                                   </h4>
                                 </Form.Field>
                               </Form>
                             </div>
                           </Grid.Column>
                           <Grid.Column>
                             <Image
                               floated="right"
                               verticalAlign="top"
                               src="https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png"
                             />
                           </Grid.Column>
                         </Grid.Row>
                       </Grid>
                     </Modal>
                   );
                 }
               }

