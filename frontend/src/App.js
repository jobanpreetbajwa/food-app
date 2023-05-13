import React, { useContext, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";
import Login from "./Components/Login/Login";
import VarContent from "./Store/VarContent";
import { ToastContainer } from 'react-toastify';
function App() {
  const [cartShown,setCartShown]=useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const ctxVar=useContext(VarContent)

  const cartShownHandler=()=>{
    setCartShown(true);
  };
  const hideCartHandler=()=>{
    setCartShown(false)
  }

  //login page
  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      {!isLoggedIn&&<Login onLogin={loginHandler} />}
      {isLoggedIn&&<CartProvider>
      <Header onLogout={logoutHandler} onCartHandler={cartShownHandler}/>
      {cartShown && <Cart toHideHandler={hideCartHandler}/>}
      <main>
      {!ctxVar.hide &&<Meals onLogout={logoutHandler} />}
      </main>
      <ToastContainer autoClose={5000} position="top-right"/>
    </CartProvider>}
    
  </React.Fragment>
  )
}

export default App;
