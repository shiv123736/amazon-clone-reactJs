
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./component/Header"
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import reducer, { UserContext } from "./component/Basket";
// import { Basket } from "./component/Basket";
import { useEffect, useReducer } from 'react';
import Login from './component/Login';
import { auth } from './component/Firebase';

export const initialValue = {
  basket: [],
  user: null,
}
 
function App() {
 const [BasketInfo, dispatch] = useReducer(reducer, initialValue);
 const user = BasketInfo.user;
  useEffect(() => {
    const unSubscribed = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //logged in
        dispatch({
          type: "user",
          user: authUser.email,
        })      
      }
      else {
        // logged out
        dispatch({
          type: "user",
          user: null,
        })    
      }
      return (() => {
        unSubscribed();
      })
    })
  }, [])
  console.log("user: ",BasketInfo.user)
  return (
    <Router>
      <UserContext.Provider value={dispatch}>

    <div className="App">
     <Switch>
       <Route path="/checkout">
       <Header basketValue={BasketInfo.basket.length} userName={user}/>
         <Checkout basket={BasketInfo}/>
       </Route>

       <Route path="/login">
         <Login />
       </Route>

       <Route path="/">
         <Header basketValue={BasketInfo.basket.length} userName={user}/>
        <Home />

       </Route>
     </Switch>

    </div>
      </UserContext.Provider>

      {/* 
          Need React Router -
          www.localhost/
          www.localhost/login
          www.localhost/checkout
      */}
    </Router>
  );
}

export default App;
