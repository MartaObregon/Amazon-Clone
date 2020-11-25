import React, {useEffect} from 'react'
import Header from './components/Header'
import CheckOut from './components/Checkout'
import './App.css';
import Home from './components/Home';
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import Payment from './components/Payment';

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(()=>{
    //only run once when the app component loads
    auth.onAuthStateChanged(loggedInUser =>{
      console.log('USER>>>', loggedInUser);


      if(loggedInUser){
        dispatch({
          type:'SET_USER',
          user: loggedInUser
        })
        //the user just logged in or the user was logged in
      }else{
        dispatch({
          type: 'SET_USER',
          user:null,
        })
        //the user is loggedout
      }
    })
  }, [])

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
        <Route path="/payment">
            <Header/>
            <Payment/>
        </Route>
      </Switch>
   
   
    </div>
    </Router>
    
  );
}

export default App;
