import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, Header, Icon, Modal} from 'semantic-ui-react';
import './App.css';
import Registration from './Registration';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Registration />
    </div>
  );
  }
}

export default App;

