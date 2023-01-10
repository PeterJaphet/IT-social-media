import {Component} from 'react';
import './mainChat.css'
import NewChat from './newChat';
import SideBar from './sideBar';
import React, { useEffect, useState } from 'react';
import Pusher from "pusher-js";
import axios from "axios";
import Rightchat from "../components/Rightchat";
import {Link} from 'react-router-dom'



function MainChat() {

  const [messages, setMessages] = useState(["Hiiiiii"]);

//   useEffect(() => {
//     axios.get("/messages/sync").then((response) => {
//       setMessages(response.data);
//     })
//   }, [])

//   useEffect(() => {
//     const pusher = new Pusher('894ed19a99283a3ffb71', {
//       cluster: 'eu'
//     });

//     const channel = pusher.subscribe('messages');
//     channel.bind('inserted', (newMessage) => {
//       setMessages([...messages, newMessage])
//     });

//     return () => {
//       channel.unbind_all();
//       channel.unsubscribe();
//     };

//   }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Rightchat />
        {/* <SideBar />
        <NewChat  messages={messages}/> */}
      </div>
    </div>
  );
}

export default MainChat;