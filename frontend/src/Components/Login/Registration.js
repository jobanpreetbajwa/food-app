import {useEffect,useState} from "react";
import classes from "./Registration.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button,} from "@mui/material";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function Registration(props){
    
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsTouched,setEmailIsTouched]=useState(false)
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordTouched,setPasswordTouched]=useState(false)
    const [formIsValid, setFormIsValid] = useState(false);
    const [enteredUser,setEnteredUser]=useState("")
    const [userTouched,setUserIsTouched]=useState(false)

    const emailInputValid=enteredEmail.includes("@gmail.com")
    const emailIsNotValid=!emailInputValid &&emailIsTouched
    const passInputValid =enteredPassword.trim().length>5 
    const passIsNotValid = !passInputValid && passwordTouched
    const userInputValid=enteredUser.trim().length>1
    const userIsNotValid=!userInputValid&&userTouched

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
      };

      const userHandler = (event) => {
        setEnteredUser(event.target.value);
      };
    
      const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
      };
      const nameIsTouched = () => {
        setEmailIsTouched(true)
      };

      const userIsTouched = () => {
        setUserIsTouched(true)
      };
      const passwordIsTouched=()=>{
        setPasswordTouched(true)
      };
      useEffect(()=>{
        if(emailInputValid&&passInputValid){
          setFormIsValid(true)
        }else{
          setFormIsValid(false)
        }
  
      },[emailInputValid,passInputValid])

    const createAccountHandler=async(event)=>{
        event.preventDefault()
        // toast.success("Sccessfully Created!",{position:"top-center"})
        // if(emailCreated.includes("@gmail.com")&&passwordCreated.trim().length>5){
           
        // }
          
          const registration=async()=>{ 
            const response=await fetch("http://localhost:3000/api/registration",{
                      method:"POST",
                      headers:{
                        "Content-Type":"application/json"
                      },
                      body:JSON.stringify({
                        email:enteredEmail,
                        password:enteredPassword
                    })
                })
                if(!response.ok){
                  throw new Error("Already exist")
                }
              } 
          try{
            await registration()
            toast("Registration Successfull",{
             position:"top-center"
           })
            props.login()
          }catch(err){
            console.log("error from api",err)
            toast("Email of this name already exist.please change your email name!",{
              position:"top-center"
            })
          }
      }
    const userClass=`${userIsNotValid? "invalid":""}`
    const emailClass=`${emailIsNotValid? "invalid":""}`
    const passClass=`${passIsNotValid? "invalid":""}`
    return<>
      <div className="registration-container">
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '60ch' },
      }}
      style={{padding:"10px",marginLeft:"50px", width:"60ch"}}
      noValidate
      autoComplete="off"
    >
       <h2 className={classes.heading}>Sign Up First</h2>
      
      <TextField id="standard-basic" style={{width:"50ch"}} value={enteredUser} onChange={userHandler} onBlur={userIsTouched} label="Username " variant="standard" />
        {userIsNotValid&&<p className={classes.error}>User name is not valid</p>}
      <TextField id="standard-basic" style={{width:"50ch"}} value={enteredEmail} onChange={emailChangeHandler} onBlur={nameIsTouched} label="Email " variant="standard" />
        {emailIsNotValid&&<p className={classes.error}>Enter a valid E-mail</p>} 
      <TextField id="standard-basic" style={{width:"50ch"}} type="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={passwordIsTouched} label="Password " variant="standard" />
        {passIsNotValid&&<p className={classes.error}>password must contains atleasts 6 characters</p>}

      <Button style={{marginLeft:"135px",width:"40%"}} variant="contained" 
      disabled={!formIsValid} 
      onClick={createAccountHandler} >Register</Button>
    </Box>
      </div>
    </>
}
export default Registration;