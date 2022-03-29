import React from 'react';

export interface ChatCardProps {
    username: string;
    date: string;
    message: string;
}

const ChatCard: React.FC<ChatCardProps> = ({ username, message, date }) => {
    return (
        <div className='card'>

            <div className='card__message'>{message}</div>
            <div className='card__group'>
                <div className='card__username'>{username}</div>
                <div style={{width:'10px'}}> &nbsp;• </div>
                <div className='card__date'>{date}</div>
            </div>

        </div>);
}

export default ChatCard;