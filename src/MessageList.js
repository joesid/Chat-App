import React from 'react'

const DUMMY_DATA =[
    {
        senderId: 'Oluwaseun',
        text: 'How far wetyn dey sup'
    },

    {
        senderId: 'Emeka',
        text: 'Oboy I just dey o'
    },

    {
        senderId: 'Oluwaseun',
        text: 'As in eh, e no easy '
    }

]
 
const dumObjects =DUMMY_DATA.map((message, index) => ({senderId: index, text:message}));

class MessageList extends React.Component{
    render(){
        return(
            <div className="message-list">
             
            
            </div>
        )
    }
}

export default MessageList