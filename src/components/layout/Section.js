import React from "react";
import Music from "./Music";

const Section = props => {
    return (
        <React.Fragment>
            <Music onClick={props.onShowCart}/>
        </React.Fragment>    
    );
};

export default Section;