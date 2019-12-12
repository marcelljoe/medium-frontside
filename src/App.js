import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Button, Header, Icon, Modal} from 'semantic-ui-react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Registration from './Registration';
import Home from './Home';
import Login from './Login';
import OZCategory from './OZCategory';
import CMTCategory from './CMTCategory';

export default class App extends Component {
  render(){
  return (

    <Router>
      <div>
        <Route exact path="/" component={OZCategory} />
        <Route path="/OZCategory" component={OZCategory} />
        <Route path="/Login" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/Registration" component={Registration}/>
        <Route path="/CMTCategory" component={CMTCategory}/>
        
      </div>
    </Router>
      // <div>  
      // <Home />
      // </div>
      
  );
  }
}