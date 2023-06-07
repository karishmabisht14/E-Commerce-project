import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalOverlay = (props) => {
  return <div className="modal">{props.children}</div>;
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
