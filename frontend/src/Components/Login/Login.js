import React,{useEffect,useState} from "react";
import classes from "./Login.module.css";
import Card from "./Card";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Registration from "./Registration";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsTouched,setEmailIsTouched]=useState(false)
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordTouched,setPasswordTouched]=useState(false)
    const [formIsValid, setFormIsValid] = useState(false);
  
  
    const[registration,setRegistration]=useState(false)
    

    const emailInputValid=enteredEmail.includes("@gmail.com")
    const emailIsNotValid=!emailInputValid &&emailIsTouched
    const passInputValid =enteredPassword.trim().length>5 
    const passIsNotValid = !passInputValid && passwordTouched
    
    const emailChangeHandler = (event) => {
      setEnteredEmail(event.target.value);
    };
  
    const passwordChangeHandler = (event) => {
      setEnteredPassword(event.target.value);
    };
  
    const nameIsTouched = () => {
      setEmailIsTouched(true)
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
    const emailError=`${emailIsNotValid ? "invalid":""}`
    const passError=`${passIsNotValid ? "invalid":""}`
    const submitHandler = async (event) => {
      // toast.success("Login Successfull")
      event.preventDefault();
      const postMethod=async()=>{
      const response=await fetch("http://localhost:3000/api/login",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                  },
                body:JSON.stringify({
                  email:enteredEmail,
                  password:enteredPassword
                })
              })
              if(!response.ok){
                throw new Error("already exist this email...")
              }
            }
            try {await postMethod()
              toast("Log in successfully...!",{
                position:"top-center"
              })              
              setTimeout(()=>{
                props.onLogin(enteredEmail, enteredPassword)
              })
              
          }
           catch(error){
            toast("New User!!First Sign Up!",{
              position:"top-center"
            })  
             setTimeout(()=>{
              setRegistration(true)
              setEnteredEmail("")
             setEnteredPassword("")
             })
          }
          }
    const loginPage= <>
          <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '60ch' },
          }}
          style={{padding:"10px",marginLeft:"50px",width:"60ch"}}
          noValidate
          autoComplete="off"
        >
          <h2 className={classes.heading}>LogIn</h2>
          <TextField style={{width:"50ch"}} className={emailError} id="standard-basic" value={enteredEmail} onChange={emailChangeHandler} onBlur={nameIsTouched} label="Email " variant="standard" />
              {emailIsNotValid&&<p className={classes.error}>Enter a valid E-mail</p>}
          <TextField  style={{width:"50ch"}} type="password" className={passError} id="standard-basic" value={enteredPassword} onChange={passwordChangeHandler} onBlur={passwordIsTouched} label="Password " variant="standard" />
              {passIsNotValid&&<p className={classes.error}>password must contains atleasts 6 characters</p>}
          <Button style={{marginLeft:"135px",width:"40%"}} variant="contained" 
          disabled={!formIsValid} 
          onClick={submitHandler} >Login</Button>
        </Box>
      
    </> 

    return <>
      <Card>
       {!registration&&loginPage}
       {registration&&<Registration login={props.onLogin}/>}
      </Card>
      </>
  };
  
  export default Login;