import React, { Component } from "react";
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
import Stories from "./Stories"
import Stats from "./Stats";
import Bookmarks from "./Bookmarks";
import Profile from "./Profile";
import ArticleByPerson from "./ArticleByPerson";


export default class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/category/:id/articles" component={OZCategory} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/cmtcategory" component={CMTCategory} />
          <Route path="/article/:id" component={Article} />
          <Route path="/responses" component={Responses}/>
          <Route path="/newstory" component={NewStory}/>
          <Route path="/stories" component={Stories}/>
          <Route path="/stats" component={Stats}/>
          <Route path="/bookmarks" component={Bookmarks}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/profile" component={ArticleByPerson}/>
        </div>
      </Router>
    );
  }
}
