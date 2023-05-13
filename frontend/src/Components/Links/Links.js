import {NavLink} from "react-router-dom";
import "./Links.css"
import { FaHamburger,FaUtensils,FaShoppingBasket} from "react-icons/fa";
import { FaArrowAltCircleLeft,FaSearch } from "react-icons/fa";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from "react";
import allMeals from "../../Store/allMeals";

function Links(props){

    const ctx=useContext(allMeals)
    const[sideBar,setSideBar]=useState(false)
    const sideBarHandler=()=>{
        setSideBar(!sideBar)
       }
    const [display,setDisplay]=useState("Main Course")
    const [icon, setIcon]=useState(<FaUtensils/>)
    const clickHandler=(event)=>{
        event.preventDefault()
        setSideBar(false)
        setDisplay(event.target.innerText)
        if(event.target.innerText==="Burgers"){
            setIcon(<FaHamburger/>)
        }
        if(event.target.innerText==="Grocery"){
            setIcon(<FaShoppingBasket/>)
        }else{
            setIcon(<FaUtensils/>)
        }   
    }
    const searchHandler=(event)=>{
        console.log(event.target.value,"searched item ",ctx.mainCourse)
        if(event.target.value==ctx.mainCourse.map(value=>value.name)){
            console.log("yes matched",event.target.value)

        }
    }
    return<>
    <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={sideBarHandler}
                >
                <MenuIcon />
                </IconButton>
                {<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {!sideBar&&icon&&display}
                </Typography>}
                {sideBar&&<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={clickHandler}>
                <FaUtensils/>
                <NavLink className="nav-bar" to="/"> Main Course</NavLink>
                </Typography>}
                {sideBar&&<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={clickHandler}>
                <FaHamburger/>
                <NavLink className="nav-bar"  to="/burgers"> Burgers</NavLink>
                </Typography>}
                {sideBar&&<Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={clickHandler}>
                <FaShoppingBasket/>
                <NavLink className="nav-bar"  to="/veggies"> Grocery </NavLink>
                </Typography>}
                <Typography>
                        <input type="text" id="search" placeholder="search item" onChange={searchHandler} >
                        </input>
                </Typography>
                <FaArrowAltCircleLeft/>
                <Button color="inherit" onClick={props.logout}>Logout</Button>
            </Toolbar>
            </AppBar>
         </Box>   
         </>
}
export default Links;

