import { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealForm.module.css";

const MealForm=(props)=>{
const [formIsValid,setFormIsValid]=useState(true)
const amountRef=useRef()

const [btnbump,setBtnBump]=useState(false)

const bumpOnClick=()=>{
    setBtnBump(true)
    
    const timer= setTimeout(()=>{
        setBtnBump(false)
    },300)
    return ()=>{
        clearTimeout(timer)
    }
    }



const submitHandler=(event)=>{
    event.preventDefault()
    const enteredAmount=amountRef.current.value // always return string
    const finalAmount=+enteredAmount
    if(enteredAmount.trim().length===0|| finalAmount>5||finalAmount<1){
        return setFormIsValid(false)
    }
    props.addHandler(finalAmount)
  

}
const btnClass=`${classes.button} ${btnbump? classes.bump:""}`
     return <form className={classes.form} onSubmit={submitHandler}>
         <Input 
         ref={amountRef}
         label="Amount" 
         input={{
            id:"input",
            type:"number",
            min:"1",
            max:"5",
            step:"1",
            defaultValue:"1",}}/>
         <button className={btnClass} onClick={bumpOnClick}>+ add</button>
         {!formIsValid && <p>enter valid number between 1 - 5</p>}
     </form>
}
export default MealForm;