import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Button, Header, Icon, Modal } from "semantic-ui-react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Login from "./Login";
import OZCategory from "./OZCategory";
import CMTCategory from "./CMTCategory";
import Article from "./Article";
import Responses from "./Responses";
import NSHeader from "./NSHeader";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={NSHeader} />
          <Route path="/OZCategory" component={OZCategory} />
          <Route path="/Login" component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/Registration" component={Registration} />
          <Route path="/CMTCategory" component={CMTCategory} />
          <Route path="/Article" component={Article} />
          <Route path="/Responses" component={Responses}/>
        </div>
      </Router>
    );
  }
}
