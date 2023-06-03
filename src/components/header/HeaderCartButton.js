import React from "react";
import "./HeaderCartButton.css";
import { Button } from "react-bootstrap";

const HeaderCartButton = props => {
    return (
        <React.Fragment>
            <Button className="button" variant="outline-info" onClick={props.onClick}>cart</Button>
            <h3 variant = "outline-info" className="badge badge-wrap">0</h3>
        </React.Fragment>            
    );
};

export default HeaderCartButton;