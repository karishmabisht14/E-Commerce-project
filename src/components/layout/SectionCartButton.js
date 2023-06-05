import { Button } from "react-bootstrap";

const SectionCartButton = props => {
    return (
        <div className="text-center mt-3">
            <Button variant="secondary" onClick={props.onClick}>See the cart</Button>
        </div>
        
    );
}

export default SectionCartButton;