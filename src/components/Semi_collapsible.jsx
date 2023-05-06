import "../styles/Home.css";
import { useState, useRef } from "react";

const Semi_Collapsible = () => {
  const [isToggle, setToggle] = useState(false);
  const parentRef = useRef();
  return (
    <>
      <div
        className="semi-content-parent"
        ref={parentRef}
        style={{
          height: isToggle ? parentRef.current.scrollHeight + "px" : "6rem",
        }}
      >
        <div className="semi-collapsible-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue
          eget arcu dictum varius duis at consectetur. Velit egestas dui id
          ornare arcu odio ut. At in tellus integer feugiat. Aliquet nec
          ullamcorper sit amet. Etiam tempor orci eu lobortis elementum nibh
          tellus molestie. Leo duis ut diam quam nulla porttitor massa id neque.
          Elit scelerisque mauris pellentesque pulvinar pellentesque habitant
          morbi tristique senectus. Aliquam nulla facilisi cras fermentum odio
          eu feugiat pretium. Ipsum dolor sit amet consectetur adipiscing elit
          duis. Risus nec feugiat in fermentum. Odio tempor orci dapibus
          ultrices in. Pharetra diam sit amet nisl. Sit amet massa vitae tortor
          condimentum. At lectus urna duis convallis. Faucibus interdum posuere
          lorem ipsum dolor sit amet. Ultrices sagittis orci a scelerisque purus
          semper eget duis at. Viverra tellus in hac habitasse. Mauris sit amet
          massa vitae tortor condimentum lacinia quis. Morbi non arcu risus quis
          varius quam quisque id. Sollicitudin aliquam ultrices sagittis orci a
          scelerisque. Fusce ut placerat orci nulla pellentesque dignissim enim
          sit. Pellentesque sit amet porttitor eget dolor morbi. Aliquam
          vestibulum morbi blandit cursus risus at. Risus viverra adipiscing at
          in tellus integer feugiat. Scelerisque eleifend donec pretium
          vulputate sapien nec. Id interdum velit laoreet id donec ultrices. Non
          consectetur a erat nam at lectus. Aliquam vestibulum morbi blandit
          cursus risus at ultrices mi tempus. Habitant morbi tristique senectus
          et netus et malesuada fames ac. Senectus et netus et malesuada fames
          ac turpis egestas. Aliquam malesuada bibendum arcu vitae elementum
          curabitur vitae nunc sed.
        </div>
      </div>
      <div className="view-all-parent">
        <button
          className="view-all-btn btn-dark"
          onClick={() => setToggle(!isToggle)}
          style={{}}
        >
          {isToggle ? "View Less" : "View more"}
        </button>
      </div>
    </>
  );
};

export default Semi_Collapsible;
