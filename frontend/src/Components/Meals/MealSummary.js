import classes from "./MealSummary.module.css";
const MealSummary=()=>{
    return <div className={classes.control}>
        
            <section className={classes.summary}> 
            <h1>Summary of foods</h1>
            <p>Food is any substance consumed to provide nutritional support for an organism.</p>
            <p> Food is usually  contains essential nutrients, such as carbohydrates, fats, proteins, 
                vitamins, or minerals. </p>
            </section>
    </div>
}
export default MealSummary;