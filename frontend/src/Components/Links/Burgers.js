import Card from "../Cart/Card";
import classes from "./Burgers.module.css";
import MealsItem from "../Meals/MealsItem";
import BeanBurger from "../../photo/beanBurger.webp";
import ButterChickenBurger from "../../photo/butterChickenBurger.webp";
import ChiliBurger from "../../photo/chiliBurger.webp";
import LambBurger from "../../photo/lambBurger.jpeg";
import LentilMushroom from "../../photo/lentilMushroom.jpeg";
import PizzaBurger from "../../photo/pizzaBurger.webp";
import PotatoCornBurger from "../../photo/potatoCornBurger.webp";

function Burgers(){

    const Meals= [
        { 
          key:"1",
          id: 'B1',
          pic:BeanBurger,
          name: 'Bean Burger',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        { 
          key:"2",
          id: 'B2',
          pic:ButterChickenBurger,
          name: "Butter Chicken Burger",
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          key:"3",
          id: 'B3',
          pic:ChiliBurger,
          name: 'Chili Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        { 
          key:"4",
          id: 'B4',
          pic:LambBurger,
          name: 'Lamb Burger',
          description: 'Healthy...and green...',
          price: 18.99,
        },
        {
          key:"5",
          id: 'B5',
          pic:LentilMushroom,
          name: 'Lentil Mushroom',
          description: 'Healthy...and green...',
          price: 18.99,
        },
        {
          key:"6",
          id: 'B6',
          pic:PizzaBurger,
          name: 'Pizza Burger',
          description: 'Healthy...and green...',
          price: 18.99,
        },
        {
          key:"7",
          id: 'B7',
          pic:PotatoCornBurger,
          name: 'Potato Corn Burger',
          description: 'Healthy...and green...',
          price: 18.99,
        }
      ];
    return<section className={classes.meals}>
        <Card>
        <ul>{Meals.map(item=><MealsItem meal={item}></MealsItem>)}</ul>
        </Card>
    </section>


}
export default Burgers;