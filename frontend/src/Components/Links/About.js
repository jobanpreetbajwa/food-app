import Card from "../Cart/Card"
import "./About.css";
import food from "../../photo/food2.jpeg";
import video from "../../photo/video.mp4";
function About(){
    return<Card> 
      <div class="card-transition">
        <div className="single">
         <h2 class="transition">Awesome Headline</h2>
         <p> This food app Software crafted specifically for businesses that do local delivery.It can be used out of box for restaurants/food industry, grocery shops, Flower, laundry, alcohol, 
           Cannabis delivery shops or any business that does hyperlocal delivery.
           If you are looking for a complete online food ordering solution that is easy to setup and brings 
           the best mobile experience for your users,then look no further and <span className="span">Contact Us Today</span>
           </p>
          <img className="img" src={food} alt="table of meal"/>
          </div> 
          <video className="video" src={video} muted="false" autoplay="true"/>
          </div>
  </Card>

//         return <div class="container">
  //<video className="video" src={video} muted="false" autoplay="true"/>
//                 <img src="https://images.unsplash.com/photo-1569390173732-5c735072c80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
//                 <img src="https://images.unsplash.com/photo-1582842195329-6a0baffd2a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
//                 <img src="https://images.unsplash.com/photo-1600722230999-22c256d38cb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
//             </div>
           
 }

export default About;