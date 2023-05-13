import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import React, { useContext, useState } from "react";
import CartContent from "../../Store/CartContent";
import CartItem from "./CardItems";
import Checkout from "./Checkout";

const Cart=(props)=>{

    const[checkOut,setCheckOut]=useState(false)
    const cartctx=useContext(CartContent)
    const totalcost=`$${cartctx.totalAmount.toFixed(2)}`
    const hasOrder=cartctx.items.length>0

    const[isSubmitting,setIsSubmitting]=useState(false)
    const[didSubmit,setDidSubmit]=useState(false)

    const remove=(id)=>{
        cartctx.removeItem(id)
    }
    const add=(item)=>{
        cartctx.addItem({...item,amount:1})
    }
   const CheckoutHandler=()=>{
        setCheckOut(true)
    }

    const submitOrderHandler=async (userdata)=>{
        setIsSubmitting(true)
        await fetch("http://localhost:3000",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
              },
            body:JSON.stringify({
                user:userdata,
                orderedItems:cartctx.items
            })
        }).catch(error=>{
            return<section className={classes.Error}>
                    <p>{error.mssage}</p>
                </section>
        })
        setIsSubmitting(false)
        setDidSubmit(true)
        cartctx.clearCart()
    }
    const modalAction=<div className={classes.actions}>
                    <button className={classes["button--alt"]} onClick={props.toHideHandler}>Close </button>
                    {hasOrder&&<button className={classes.button} onClick={CheckoutHandler}>Order</button>}
                </div>

    const cartModalContent= <React.Fragment>
                    <div className={classes.total}>
                        <span>Total amount</span>
                        <span>{totalcost}</span>
                    </div>
                    <ul className={classes["cart-items"]}>
                        {cartctx.items.map((item)=><CartItem key={item.key} name={item.name} price={item.price} amount={item.amount} onRemove={remove.bind(null,item.id)} onAdd={add.bind(null,item)} />
                    )}
                    </ul>
                    {checkOut&&<Checkout onConfirm={submitOrderHandler} onCancel={props.toHideHandler}/>}
                    {!checkOut&&modalAction}
                    </React.Fragment>

    const isSubmittingModalContent=<p>sending your order data...</p>
    const didSubmittedModalContent=<p>successfully sent the order !</p>
    return<Modal onClose={props.toHideHandler}>
      {!isSubmitting&&!didSubmit&&cartModalContent}
      {isSubmitting&&isSubmittingModalContent}
      {didSubmit&& !isSubmitting &&didSubmittedModalContent}
        
    </Modal>
}
export default Cart;