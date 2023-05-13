import {FaInstagram,FaFacebook,FaGoogle} from "react-icons/fa";
import "./Icons.css";
function Icons(){
    return<div className="icons-class">
        <ul>
            <li>
            <FaInstagram/>
            </li>
            <li>
                <FaFacebook/>
            </li>
            <li>
                <FaGoogle/>
            </li>
            </ul>
    </div>
}
export default Icons