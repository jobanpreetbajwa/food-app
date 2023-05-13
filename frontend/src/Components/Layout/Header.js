import React, { useState } from "react";
import Mealpic from "/Users/jobanpreetsingh/learn/food-project/frontend/src/photo/meals.jpeg";
import "./Header.css";
import HeaderCartButtton from "./HeaderCartButtton";
import { NavLink ,BrowserRouter,Route,Routes} from "react-router-dom";
import VarContent from "../../Store/VarContent";
import About from "../Links/About";
import Complaintform from "../Links/Complaintform";
const Header=(props)=>{

    const [isContentHidden,setisContentHidden]=useState(false)
const varCtxHandler=()=>{
    setisContentHidden(true)
    
}
const homeHandler=()=>{
    setisContentHidden(false)
    
}
console.log(isContentHidden)
const contentVisible={
    hide:isContentHidden
}
    return  <>
        <nav className="main-nav">
            <div className="logo">
                <h2 ><span>D</span>elicious <span>f</span>ood</h2>
            </div>
            <div className="menu">
                <ul>
                <BrowserRouter>
                    <li> 
                       <NavLink className="nav-bar" to="/" onClick={homeHandler}> home </NavLink>
                    </li>
                    <li >
                    <NavLink className="nav-bar" to="/about" onClick={varCtxHandler}> about </NavLink>
                    
                    </li>
                    <li>
                    <NavLink className="nav-bar" to="/contact" > contact </NavLink> 
                    <Routes>
                        <Route path="/contact" element={<Complaintform/>}></Route>
                    </Routes>
                    </li>
                    </BrowserRouter>
                </ul>
                </div>
            <div className="cart"> 
            <ul>
                <li>
                <HeaderCartButtton cartHandler={props.onCartHandler}/>
                </li>
                {/* <li>
                <button onClick={props.onLogout}>
                < FaArrowAltCircleLeft /> logout</button>
                </li> */}
            </ul>
            </div>
        </nav>
        {isContentHidden&& <About/>}
        <div className="main-image">
        {!isContentHidden &&<img src={Mealpic} alt="table of meals "/>}
        
        <VarContent.Provider value={contentVisible}/>
        </div>
    
    </>
}
export default Header;

