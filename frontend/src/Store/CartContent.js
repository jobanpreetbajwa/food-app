import react from "react";

const CartContent=react.createContext(
    {   
        items:[],
        totalAmount:0,
        addItem:(item)=>{},
        removeItem:(item)=>{},
        clearCart:()=>{},
    }
)

export default CartContent;