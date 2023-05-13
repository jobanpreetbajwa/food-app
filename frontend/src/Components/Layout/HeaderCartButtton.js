import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon";
import CartContent from "../../Store/CartContent";
const HeaderCartButtton=(props)=>{

const cartCtx=useContext(CartContent)    

const {items}=cartCtx 
const[btnbump,setBtnBump]=useState(false)
const cartItemsNum=items.reduce((curNum,item)=>{
    return curNum + item.amount
},0)
useEffect(()=>{
    if(items.length===0){
        return;
    }
    setBtnBump(true)
   const timer= setTimeout(()=>{
        setBtnBump(false)
    },300)
    return ()=>{
        clearTimeout(timer)
    }
},[items])
const btnclass=`${classes.button} ${btnbump ?classes.bump:" "}`
    return<button className={btnclass} onClick={props.cartHandler} >
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span >your cart</span>
        <span className={classes.badge}>{cartItemsNum}</span>
    </button>
}
export default HeaderCartButtton;