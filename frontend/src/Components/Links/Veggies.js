import Card from "../Cart/Card";
import MealsItem from "../Meals/MealsItem";
import classes from "./Pizzas.module.css";
import brocoli from "../../photo/brocoli.jpeg";
import carrot from "../../photo/carrot.jpeg";
import cauliflower from "../../photo/cauliflower.jpeg";
import kale from "../../photo/kale.jpeg";
import mushroom from "../../photo/mushroom.jpeg";
import tomatoes from "../../photo/tomatoes.jpeg";
function Veggies(){
    const Meals= [
        { 
          key:"1",
          id: 'v1',
          pic:brocoli,
          name: 'Broccoli',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        { 
          key:"2",
          id: 'v2',
          pic:carrot,
          name: 'Carrot',
          description: 'A german specialty!',
          price: 16.5,
        },
        { 
          key:"3",
          id: 'v3',
          pic:cauliflower,
          name: 'CauliFlower',
          description: 'A german specialty!',
          price: 16.5,
        },
        { 
          key:"4",
          id: 'v4',
          pic:kale,
          name: 'kale',
          description: 'A german specialty!',
          price: 16.5,
        },
        { 
          key:"5",
          id: 'v5',
          pic:mushroom,
          name: 'Mushroom',
          description: 'A german specialty!',
          price: 16.5,
        },
        { 
          key:"6",
          id: 'v6',
          pic:tomatoes,
          name: 'Tomatoes',
          description: 'A german specialty!',
          price: 16.5,
        },
    ]
    return<div className={classes.pizzas}>
        <Card>
        <ul>{Meals.map(item=><MealsItem meal={item}></MealsItem>)}</ul>
        </Card>
    </div>
}
export default Veggies;