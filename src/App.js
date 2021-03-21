import MessageList from './MessageList.js';
// import Chatkit from '@pusher/chatkit';
// import { StreamChat } from 'stream-chat';
import './App.css';
import React from 'react';
import NewRoomForm from './NewRoomForm.js';
import SendMessageForm from './SendMessageForm.js';


// class App extends React.Component{
  
//   componentDidMount(){
//     const chatManager = new Chatkit.chatManger({
      
//     })
//   }
// render(){
//   return(
//     <div className="App">
//       {/* <RoomList /> */}
//     <MessageList />
//     <SendMessageForm />
//     <NewRoomForm />
//     </div>
//   )
// }

// }





function App() {
  return (
    <div className="App">
    <MessageList />
    </div>
  );
}

export default App;
