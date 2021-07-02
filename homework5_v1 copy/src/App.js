import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Contacts from './components/Contacts';
import Other from './components/Other';
import NotFound from './components/NotFound';
import Routes from './components/Routes';
import Sidebar from './layout/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Sidebar >
            <Routes/>
          </ Sidebar>

      </BrowserRouter>
      
    </div>
  );
}

export default App;