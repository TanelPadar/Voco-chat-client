import React, { useState, useEffect, useRef } from "react";

interface NameProps {
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
}
const Name: React.FC<NameProps> = ({setAuthor }) => {
  return (
    
    <div className="username text-right"><p><b>Guest1212</b></p></div>
  );
};
export default Name;