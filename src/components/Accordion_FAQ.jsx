import "../styles/Home.css";
import { useState, useRef } from "react";

const Accordion_FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();
  const toggleView = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion">
      <div className="accordion-heading" onClick={() => toggleView()}>
        <p>Lorem ipsum dolor set amit</p>
        <p className="accordion-btn" style={{transform:isOpen?"rotate(135deg)":"rotate(0)"}}>+</p>
      </div>
      <div
        className="content-parent"
        ref={parentRef}
        style={{
          height: isOpen ? parentRef.current.scrollHeight + "px" : "0px",
        }}
      >
        <div className="accordion-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </div>
      </div>
    </div>
  );
};

export default Accordion_FAQ;
