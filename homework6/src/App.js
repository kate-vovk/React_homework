import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";

import Routes from './components/Routes';
import Layout from './layout/Layout';
import {AuthContext} from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContext >
        <BrowserRouter>
            <Layout >
              <Routes/>
            </ Layout>
           
        </BrowserRouter>
      </AuthContext>
      
    </div>
  );
}

export default App;