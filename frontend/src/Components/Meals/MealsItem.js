import { useContext, useState } from "react";
import MealForm from "./MealForm";
import classes from "./MealsItem.module.css";
import CartContent from "../../Store/CartContent";
import Modal from "../UI/Modal";
import Tooltip from "@material-ui/core/Tooltip"

const MealsItem=(props)=>{

const[isClicked,setIsClicked]=useState(false)  

const Cartctx=useContext(CartContent)

const price=`${props.meal.price.toFixed(2)}`
const addToCartHandler=(amount)=>{
    Cartctx.addItem({
        key:props.meal.key,
        id:props.meal.id,
        price:+price,
        name:props.meal.name,
        amount:amount
    })
}
const itemHandler=()=>{
    setIsClicked(true)
}


    return<>
        <li className={classes.meal}>
            <div >
                <Tooltip title="Click to view more" placement="top" >
                <h3 onClick={itemHandler}>{props.meal.name}</h3>
                </Tooltip>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>${price}</div>
            </div>
            <div>
                <MealForm addHandler={addToCartHandler}/>
            </div>
        </li>
        {isClicked&&<Modal >
            <div className={classes.modal}>
                <img className={classes.img} src={props.meal.pic} alt="img"/>
                <h3>{props.meal.name}</h3>
                <p className={classes.para}>{props.meal.description}</p>
                <button className={classes.button} onClick={()=>{setIsClicked(false)}}> Back </button>
            </div>
        </Modal>}
        </>
}
export default MealsItem;