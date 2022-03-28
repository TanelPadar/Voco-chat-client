import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import Input from "./userInput";

interface ButtonProps {
  submitHandler: React.MouseEventHandler<HTMLButtonElement>;
}



function tekst({ submitHandler }: ButtonProps): JSX.Element  {
  const shoot = () => {
    return <pre>{JSON.stringify(postMessage, null, 2)}</pre>;
  }

  return (
    <button type="button" className="btn btn-primary" onClick={shoot}>Saada</button>
    
    );
  }






export default tekst;


