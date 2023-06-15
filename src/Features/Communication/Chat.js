import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./Chat.css"
const Chat = () => {
    return (
        <div className='App'>
            <Navbar />
            <div className='Document_container'>
                <div className='chat_container'>
                    <div className='chat_people_container'></div>
                    <div className='chat_text_container'></div>
                </div>
                <div className='chat_second_container'></div>
            </div>
        </div>
    )
}

export default Chat