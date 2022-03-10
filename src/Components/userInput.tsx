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
    <div className="Input"  >
      <textarea placeholder="Write your message here..."
      onChange={event => setFormattedContent(event.target.value)}
      value={content}
        
       
     
        
      >
      
      </textarea>
      <p className="limit">
        {content.length}/{limit}
      </p>
    </div>
      );
    }
  

export default Input;