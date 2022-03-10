import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import Input from "./userInput";





function tekst() {
  const shoot = () => {
    alert("see tekst on äge")
  }

  return (
    <button className="btn1" onClick={shoot}>Send</button>
    );
  }






export default tekst;


