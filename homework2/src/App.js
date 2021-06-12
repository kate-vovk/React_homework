import logo from './logo.svg';
import './App.css';
import {Posts} from './components/Task';
function App() {
  const users={
    1:'User1', 2:'User2', 3:'User3', 4:'User4', 5:'User5', 
    6:'User6', 7:'User7', 8:'User8', 9:'User9', 10:'User10', 
  }
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Posts users={users}/>
    </div>
  );
}

export default App;
