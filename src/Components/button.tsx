import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import submitMessages from "./Chat";
import ChatCard from "./ChatCard";
import Input from "./userInput";
import data from "../data.json";
import { callbackify } from "util";


interface ButtonProps {
  submitHandler: React.MouseEventHandler<HTMLButtonElement>;
}



function tekst({ submitHandler }: ButtonProps): JSX.Element  {
  const shoot = () => {
    alert("jou")
   
  }

  return (
    <button type="button" className="btn btn-primary" onClick={submitHandler}>Saada</button>
    
    );
  }






export default tekst;


