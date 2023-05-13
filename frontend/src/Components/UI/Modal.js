
import reactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}>

    </div>
}
const ModalOverLay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portal=document.getElementById("overlays")
const Modal=(props)=>{
    return<>
    {reactDom.createPortal(<Backdrop onClose={props.onClose}/>,portal)}
    {reactDom.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portal)}
    </>
}
export default Modal;