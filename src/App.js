import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Button, Header, Icon, Modal} from 'semantic-ui-react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Registration from './Registration';
import Home from './Home';
import Login from './Login';
import OZCategory from './OZCategory';
import HomeHeader from './HomeHeader';

export default class App extends Component {
  render(){
  return (
      <div>  
      <OZCategory />
      </div>
      
  );
  }
}