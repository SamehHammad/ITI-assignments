import React, { useState } from "react";
import "./Images.css";
import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.jpg";
import img3 from "./imgs/3.jpg";
import img4 from "./imgs/4.jpg";
import img5 from "./imgs/5.jpg";

const Images = () => {
  const imgs = [img1, img2, img3, img4, img5];
  const [counter, setCounter] = useState(0);

  const nextHandler = () => {
    setCounter((counter + 1) % 5);
  };
  const prevHandler = () => {
    setCounter((counter - 1 + 5) % 5);
  };
  
  return (
    <div className="container">
      <div className="card">
        <img src={imgs[counter]} />
        <button onClick={nextHandler}>Next</button>
        <button onClick={prevHandler}>Prev</button>
      </div>
    </div>
  );
};

export default Images;
