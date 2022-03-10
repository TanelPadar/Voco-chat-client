import React from 'react';
import '../App.css';
import data from '../data.json';
import ChatCard from './ChatCard';
import Input from './userInput';
import Name from './Name';
import button from './button';
import Button from './button';


const Chat: React.FC = () => {
    return (
        <div className="chat">
            <h3>VOCO</h3>

            <div className="chat__container">
                {data.map((cardItem) => {
                    return (
                        <ChatCard key={cardItem.id} username={cardItem.username} message={cardItem.message}  date={cardItem.date}/>
                    )
                })}
             </div> 
             <div className='inputField'>
            <Name/>
            <Input/>
            
            
            
            </div>
            <Button/>
          
        </div>
        
    );
}

export default Chat;