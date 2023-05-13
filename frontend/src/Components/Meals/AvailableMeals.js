import classes from "./AvailableMeals.module.css";
import Card from "../Cart/Card";
import MealsItem from "./MealsItem";
import { useContext, useEffect, useState } from "react";
import sushi from "../../photo/sushi.jpeg";
import Schnitzel from "../../photo/schnitzel.jpeg";
import greenBowl from "../../photo/greenBowl.png";
import barbequeBurger from "../../photo/barbequeBurger.jpeg";
import allMeals from "../../Store/allMeals";
function AvailableMeals(){

  const dummyMeals= [
    { 
      key:"1",
      id: 'm1',
      pic: sushi,
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    { 
      key:"2",
      id: 'm2',
      pic:Schnitzel,
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      key:"3",
      id: 'm3',
      pic:barbequeBurger,
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    { 
      key:"4",
      id: 'm4',
      pic:greenBowl,
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
        const[Meals,setMeals]=useState([])
        const[isError,setIsError]=useState(false)
        const[isLoading,setIsLoading]=useState(true)
        const[httpmsg,setHttpmsg]=useState(null)
        useEffect(()=>{
        const fetchMeal=async ()=>{
          const response=await fetch("http://localhost:3000/api/course")
          if(!response.ok){
             throw new Error("http request is not responding")
          }
          const responseData=await response.json()
          const loadMeals=[]
          for(const i in responseData )
            loadMeals.push({
              key:responseData[i].key,
              id:responseData[i].id,
              name:responseData[i].name,
              pic: responseData[i].pic,
              description:responseData[i].description,
              price:responseData[i].price
            })
            setMeals(loadMeals)
            setIsLoading(false)
        } 
            fetchMeal().catch((error)=>{
            setIsError(true)
            setHttpmsg("http request is not responding")
            setIsLoading(false)
            setTimeout(()=>{
              const loadMeals=[]
              for(const i in dummyMeals)
                loadMeals.push({
                  key:dummyMeals[i].key,
                  id:dummyMeals[i].id,
                  name:dummyMeals[i].name,
                  pic: dummyMeals[i].pic,
                  description:dummyMeals[i].description,
                  price:dummyMeals[i].price
                })
                setIsError(false)
                setMeals(loadMeals)
            },2000)
            }
          )
      })
        if(isLoading&&!isError)
        return <section>
            <p className={classes.mealsloading}>...loading</p>
        </section>

        if(httpmsg&&isError){
          return <section className={classes.mealsError}>
                <p>{httpmsg}</p>
          </section>
}
        return <section className={classes.meals}>
            <Card>
            <ul>{Meals.map(item=><MealsItem meal={item}></MealsItem>)}</ul>
            </Card>
        </section>


 }

  export default AvailableMeals;