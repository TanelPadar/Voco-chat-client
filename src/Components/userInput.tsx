import React, { useState, useEffect, useRef } from "react";

interface userInputProps {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  message: string;
}

const Input: React.FunctionComponent<userInputProps> = ({setMessage, message }) => {
  const limit=100
  const [content, setContent] = React.useState("");
 
  const setFormattedContent = React.useCallback(
    text => {
      setContent(text.slice(0,limit));
    },
    [limit, setContent]
  );
 
  return (
     
    <div className="form-group">

      <textarea className="form-control" id="exampleFormControlTextarea1" rows={7} style={{ borderBottomRightRadius: "5px", borderBottomLeftRadius: "0px", borderTopRightRadius: "0px", borderTopLeftRadius: "0px" }}

        onChange={(e) => setMessage(e.target.value)} 
        value={message}>
          
        </textarea>
        <p className="limit">
      {message.length}/{limit}
        </p>

    </div>
        
  
      );
    }
  

export default Input;