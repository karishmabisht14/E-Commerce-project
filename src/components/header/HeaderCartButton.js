import React, { useContext } from "react";
import "./HeaderCartButton.css";
import { Button } from "react-bootstrap";
import CartContext from "../store/CartContext";

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((acc,cur) => {
        return acc + cur.quantity;
    }, 0 )
    return (
        <React.Fragment>
            <Button className="button" variant="outline-info" onClick={props.onClick}>cart</Button>
            <span variant = "outline-info" className="badge badge-wrap">{numberOfCartItems}</span>
        </React.Fragment>            
    );
};

export default HeaderCartButton;