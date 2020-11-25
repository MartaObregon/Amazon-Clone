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
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51Hj19rEjLGUVpd9dzURkx31g0tZLW3vjWN8kdAwUatM0dgHZcCHdHQBJPsB3diqwIWkWAl5puHAvfPSJuhVCXK9100md6g1nfH');

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
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
            
        </Route>
      </Switch>
   
   
    </div>
    </Router>
    
  );
}

export default App;
