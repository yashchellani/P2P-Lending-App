import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import { Component } from 'react';
import User from './components/user';
import Complete from './components/complete';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: [],
      flagg : false,
    }
  }
  handleAnswer = (x) => {
    this.setState({
      answer: x,
      flagg : true
    });

  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/form" element=
          {this.state.flagg ? 
            <Complete answer={this.state.answer}/>
            :
            <User  handleAnswer={this.handleAnswer}/>
          }>
          </Route>
        </Routes>
      </Router>
    );
  } 
}
export default App;
