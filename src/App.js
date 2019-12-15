import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Login from "./Login";
import OZCategory from "./OZCategory";
import CMTCategory from "./CMTCategory";
import Article from "./Article";
import Responses from "./Responses";
import NewStory from "./NewStory";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={NewStory} />
          <Route path="/OZCategory" component={OZCategory} />
          <Route path="/Login" component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/Registration" component={Registration} />
          <Route path="/CMTCategory" component={CMTCategory} />
          <Route path="/Article" component={Article} />
          <Route path="/Responses" component={Responses}/>
          <Route path="/NewStory" component={NewStory}/>
        </div>
      </Router>
    );
  }
}
