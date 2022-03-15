import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import Input from "./userInput";






function tekst(): JSX.Element {
  const shoot = () => {
    alert("see tekst on äge")
  }

  return (
    <button type="button" className="btn btn-primary" onClick={shoot}>Saada</button>
    
    );
  }






export default tekst;


