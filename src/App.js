import Header from './components/Header'
import CheckOut from './components/Checkout'
import './App.css';
import Home from './components/Home';
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
      
      <Switch>
      
        <Route exact path="/">
        <Header/>
        <Home/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/checkout">
        <Header/>
          <CheckOut/>
        </Route>
      </Switch>
   
   
    </div>
    </Router>
    
  );
}

export default App;
