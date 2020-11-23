import Header from './components/Header'
import CheckOut from './components/Checkout'
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/">
          
          <Home/>
        </Route>
        <Route path="/checkout">
          
          <CheckOut/>
        </Route>
      </Switch>
   
   
    </div>
    </Router>
    
  );
}

export default App;
