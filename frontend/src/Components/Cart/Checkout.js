import { useState,useRef} from "react";
import classes from "./Checkout.module.css";

function Checkout(props){

    const[formValidity,setFormValidity]=useState({
        name:true,
        location:true,
        street:true,
        contactInfo:true
    })

    const nameRef=useRef()
    const locationRef=useRef()
    const streetRef=useRef()
    const contactInfoRef=useRef()

    const isEmpty=value=>value.trim()===""
    const isLessThanNineChar=value=>value.trim().length >=9
    const submitHandler=(event)=>{
        event.preventDefault()
        const enteredName=nameRef.current.value
        const enteredLocation=locationRef.current.value
        const enteredStreet=streetRef.current.value
        const enteredContactInfo=contactInfoRef.current.value

        const enteredNameIsValid=!isEmpty(enteredName)
        const enteredLocationIsValid=!isEmpty(enteredLocation)
        const enteredStreetIsValid=!isEmpty(enteredStreet)
        const enteredContactInfoIsValid=isLessThanNineChar(enteredContactInfo) 

        setFormValidity({
            name:enteredNameIsValid,
            location:enteredLocationIsValid,
            street:enteredStreetIsValid,
            contactInfo:enteredContactInfoIsValid
        }
        )

        const formIsValid=enteredNameIsValid&&enteredLocationIsValid&&enteredStreetIsValid&&enteredContactInfoIsValid
        if(!formIsValid){
            return;
        }
        props.onConfirm({
            name:enteredName,
            location:enteredLocation,
            street:enteredStreet,
            contact:enteredContactInfo
        })
    }
     
    const nameClass=`${classes.control} ${formValidity.name ? "":classes.invalid}`
    const locationClass=`${classes.control} ${formValidity.location ? "":classes.invalid}`
    const streetClass=`${classes.control} ${formValidity.street? "":classes.invalid}`
    const contactInfoClass=`${classes.control} ${formValidity.contactInfo ? "":classes.invalid}`
    return<form onSubmit={submitHandler} className={classes.form}>
            <div className={nameClass}>
                <label htmlFor="name">your name</label>
                <input type="text" id="name" ref={nameRef}></input>
                {!formValidity.name&& <p>please enter a valid name.Name field must have a character</p>}
            </div>
            <div className={locationClass}>
                <label htmlFor="name">location</label>
                <input type="text" id="name" ref={locationRef}></input>
                {!formValidity.location&& <p>please enter a valid location.location field must have a character</p>}
            </div>
            <div className={streetClass}>
                <label htmlFor="name">Street</label>
                <input type="text" id="name" ref={streetRef}></input>
                {!formValidity.street&& <p>please enter a valid street.Street field must have a character</p>}
            </div>
            <div className={contactInfoClass}>
                <label htmlFor="name">contact info</label>
                <input type="number" id="name" ref={contactInfoRef}></input>
                {!formValidity.contactInfo&& <p>please enter a valid phone number.field must contain 9 numbers</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>cancel</button>
                <button type="submit" className={classes.submit}>confirm</button>
            </div>
        </form>
}
export default Checkout;