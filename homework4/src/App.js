import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTable';
import { CurrencyProvider } from './components/CurrencyProvider';

function App() {
  return (
    <div className="App">
       {/*<header className="App-header">
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
      </header>*/}
      {/* <ThemeProvider>

      <ToggleTheme />
      </ThemeProvider> */}
<CurrencyProvider>
<ProductTable />

</CurrencyProvider>

    </div>
  );
}

export default App;
