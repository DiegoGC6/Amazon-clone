import React, { useEffect} from "react";
import Header from './components/Header';
import Home from './screens/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './screens/Checkout'
import Login from './components/Login'
import { auth } from './firebase'
import { onAuthStateChanged } from "firebase/auth";
import {useStateValue} from "./StateProvider"


function App() {
  
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        dispatch({
          type: 'SET_USER',
          user: uid
        })
        // ...
      } else {
        // User is signed out
        // ...
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, [])

  return (
    
    <Router>
      <div className="App">
        
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
            <Route path="/checkout">              
              <Header />
              <Checkout />
            </Route>
            <Route path="/">        
              <Header />
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
