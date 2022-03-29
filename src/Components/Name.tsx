import React, { useState, useEffect, useRef } from "react";

interface NameProps {
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
}
const Name: React.FC<NameProps> = ({setAuthor }) => {
  return (
    
    <div className="username text-right"><input style={{ width: "85px"}} onChange={(e) => setAuthor(e.target.value)}/></div>
  );
};
export default Name;