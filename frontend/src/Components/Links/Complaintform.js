
import {useRef,useState} from "react";
import Modal from "../UI/Modal";
import classes from "./Complaintform.module.css";
import {useNavigate} from "react-router-dom";
function Complaintform(){

    const navigate=useNavigate()
    const[formValidity,setFormValidity]=useState({
        name:true,
        lastName:true,
        country:true,
        text:true
    })
    const[formIsValid,setFormIsValid]=useState(false)
    const[isSubmitting,setIsSubmitting]=useState(false)
    const[didSubmit,setDidSubmit]=useState(false)
    const[userComplaint,setUserComplaint]=useState()
    const[error,setError]=useState()

    const nameRef=useRef()
    const lastNameRef=useRef()
    const countryRef=useRef()
    const textRef=useRef()
    const isEmpty=value=>value.trim()===""
    // const isLessThanNineChar=value=>value.trim().length >=9 for numbers only
     const confirmationHandler=()=>{
        const enteredName=nameRef.current.value
        const enteredlastName=lastNameRef.current.value
        const enteredCountry=countryRef.current.value
        const enteredtext=textRef.current.value

        const enteredNameIsValid=!isEmpty(enteredName)
        const enteredlastNameIsValid=!isEmpty(enteredlastName)
        const enteredCountryIsValid=!isEmpty(enteredCountry)
        const enteredtextIsValid=!isEmpty(enteredtext) 
        setFormIsValid(enteredNameIsValid&&enteredlastNameIsValid&&enteredCountryIsValid&&enteredtextIsValid)
        setFormValidity({
            name:enteredNameIsValid,
            lastName:enteredlastNameIsValid,
            country:enteredCountryIsValid,
            text:enteredtextIsValid
        })
        setUserComplaint({name:enteredName,last:enteredlastName,country:enteredCountry,text:enteredtext})
    }
    const submitHandler=async (event)=>{
        event.preventDefault()
        setIsSubmitting(true)
           await  fetch("http://localhost:3000/api/complaint",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                  },
                body:JSON.stringify({
                   complaint:userComplaint,
                })
            }).catch((err)=>{setError(err.message)})
            setIsSubmitting(false)
            setDidSubmit(true)
            if(error){
                return <section className={classes.mealsError}>
                <p>{error}</p>
          </section>
            }

    }
        const nameClass=`${classes.control} ${formValidity.name ? "":classes.invalid}`
        const lastNameClass=`${classes.control} ${formValidity.lastName ? "":classes.invalid}`
        const CountryClass=`${classes.control} ${formValidity.country? "":classes.invalid}`
        const textClass=`${classes.control} ${formValidity.text ? "":classes.invalid}`

    const complaintForm= <form onSubmit={submitHandler} className={classes.control}>
                        <div className={nameClass}>
                            <label  htmlFor="name">First Name</label>
                            <input type="text" id="name" name="firstname" placeholder="Your name.." ref={nameRef}/>
                            {!formValidity.name&& <p>please enter a valid name.Name field must have a character</p>}
                        </div>
                        <div className={lastNameClass}>
                            <label  htmlFor="name">Last Name</label>
                            <input type="text" id="name" name="lastname" placeholder="Your last name.." ref={lastNameRef} />
                            {!formValidity.lastName&& <p>please enter a valid lastname.Name field must have a character</p>}
                        </div>
                        <div className={CountryClass}>
                            <label  htmlFor="name">Country</label>
                            <select id="country" name="name" ref={countryRef}>
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                            </select>
                        </div>
                        <div className={textClass}>
                            <label  htmlFor="name">Textarea</label>
                            <textarea id="subject" ref={textRef} name="name" placeholder="Write something.." style={{height:"200px"}}></textarea>
                            {!formValidity.text&& <p>please enter a valid text.Text field must have a character</p>}
                        </div>
                        <div className={classes.actions}>
                           { !formIsValid&&<button type="button" onClick={confirmationHandler} className={classes.confirm}>confirm</button>}
                            {!formIsValid&&<button type="button" onClick={()=>{navigate("/homepage")}} className={classes.confirm}>close</button>}
                            {formIsValid&&<button type="submit" className={classes.submit} value="Submit">submit complaint</button>}
                        </div>
                    </form>
    const isSubmittingrequest=<p>sending your request...</p>
    const sentIt=<div>
                <p>successfully sent your request...thankyou!</p>
                <button type="button" onClick={()=>navigate("/homepage")} style={{border:"1px solid #5a1a01;",background:"#7a2706;", color:"black",
                    fontSize:"large",float:"right"}} >close</button>
                </div>
    return(<Modal>
        {!isSubmitting&&!didSubmit&&complaintForm}
        {isSubmitting&&isSubmittingrequest}
        {didSubmit&& !isSubmitting &&sentIt}
    </Modal>
       

    )
}

export default Complaintform;