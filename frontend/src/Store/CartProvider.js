import { useReducer } from "react";
import CartContent from "./CartContent";

const defaultItems={
    items:[],
    totalAmount:0,
    
}
const addReducer=(state, action)=>{
    if(action.type==="ADD_ITEM"){    
        const updatedTotalAmount=state.totalAmount + action.item.amount*action.item.price
        const existingCartItemIndex=state.items.findIndex((item)=>(
                item.id===action.item.id
            //  if(item.id===action.item.id)
            //      return (state.items.indexOf(item.id))
        ))
        const existingCartItem=state.items[existingCartItemIndex]
        let updatedItems;
        if(existingCartItem){
            const updatedItem={...existingCartItem,amount:existingCartItem.amount+action.item.amount
            }
            updatedItems=[...state.items]
            updatedItems[existingCartItemIndex]=updatedItem
        }else
            updatedItems=state.items.concat(action.item)
       return{
                items:updatedItems,
                totalAmount:+updatedTotalAmount.toFixed(2)
            }
        }
    if(action.type==="REMOVE_ITEM"){
        
        const existingCartItemIndex=state.items.findIndex((item)=>(
                item.id===action.id))
        const existingCartItem=state.items[existingCartItemIndex]
        let updatedItems;
        if(existingCartItem.amount===1){
            updatedItems=state.items.filter(item=>item.id!==action.id)
        }else{
            const updatedItem={...existingCartItem,amount:existingCartItem.amount-1}
            updatedItems=[...state.items]
            updatedItems[existingCartItemIndex]=updatedItem
        }
        const updatedTotalAmount=state.totalAmount - existingCartItem.price
        return {
            items:updatedItems,
            totalAmount:+updatedTotalAmount.toFixed(2)
        }
    }
    if(action.type==="CLEAR"){
        return defaultItems
    }
        return defaultItems;
}
const CartProvider=(props)=>{

const [cartstate,dispatchAction]=useReducer(addReducer,defaultItems)

const addItemHandler=(item)=>{
    dispatchAction({type:"ADD_ITEM",item})

}
const removeItemHandler=(id)=>{
    dispatchAction({type:"REMOVE_ITEM",id:id})
}

const clearCartHandler=()=>{
    dispatchAction({type:"CLEAR",})
}


const cartContent={
    
    items:cartstate.items,
    totalAmount:cartstate.totalAmount,
    addItem:addItemHandler,
    removeItem: removeItemHandler,
    clearCart:clearCartHandler,
    
}
    

    return <CartContent.Provider value={cartContent}>
        {props.children}
    </CartContent.Provider>
}
export default CartProvider;