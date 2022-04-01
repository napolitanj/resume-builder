import React, {Component} from 'react'
import './App.css';
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Get a job.</h1>
          <h3>A CV-Application</h3>
        </header>
        <Main/>
        <footer className="footer">
          <h2>napolitanj 2022</h2>
        </footer>
      </div>
    );
  }
}

export default App;
