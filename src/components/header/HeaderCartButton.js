import React from "react";
import "./HeaderCartButton.css";
import { Button } from "react-bootstrap";

const HeaderCartButton = () => {
    return (
        <React.Fragment>
            <Button className="button" variant="outline-info">cart</Button>
            <h3 className="badge badge-wrap">0</h3>
        </React.Fragment>            
    );
};

export default HeaderCartButton;