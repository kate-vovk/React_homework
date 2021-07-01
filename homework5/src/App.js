import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";

import Routes from './components/Routes';
import Layout from './layout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Layout >
            <Routes/>
          </ Layout>

      </BrowserRouter>
      
    </div>
  );
}

export default App;