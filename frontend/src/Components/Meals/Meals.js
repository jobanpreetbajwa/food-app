import React, { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";
import Links from "../Links/Links";
import Burgers from "../Links/Burgers";
import Icons from "./Icons";
import Veggies from "../Links/Veggies";

const Meals=(props)=>{

    return<>
    <BrowserRouter>
        <Links logout={props.onLogout}/>
        < Routes>
            <Route path="/*" element={<AvailableMeals />}/>
            <Route path="/burgers" element={<Burgers/>}/>
            <Route path="/veggies" element={<Veggies/>}/> 
        </Routes>
    </BrowserRouter>
    <div>
        <div><Icons/></div>
        <div><MealSummary/></div>
        
    </div>
    
    </>
}
export default Meals;