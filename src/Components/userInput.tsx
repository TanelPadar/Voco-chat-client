import React, { useState, useEffect, useRef } from "react";

const Input: React.FunctionComponent = () => {
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
    
    <textarea className="form-control"  id="exampleFormControlTextarea1" rows={7} style={{  borderBottomRightRadius:"5px", borderTopRightRadius:"0px" }} ></textarea>
  </div>
  
  
      );
    }
  

export default Input;