import React, {Component} from 'react'
import './App.css';
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Resume Builder</h1>
          <div>
            <p>Click the menu and select print (or ctrl+P) to save as a PDF.</p>
            <p>Enable "Print Backgrounds" to add shaded text color if desired.</p>
            <p>You may need to adjust margins, depending on your browser.</p>
          </div>
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
