import React, { useState } from 'react';
import "./newChat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from 'axios';

function NewChat({ messages }) {

    const [input, setInput] = useState("");

    // const sendMessage = async (e) => {
    //     e.preventDefault();

    //     await axios.post("http://localhost:3001/messages/new", {
    //         message: input,
    //         name: "Rajat Kotangale",
    //         timestamp: "Just Now",
    //         received: true,
    //     });
    //     setInput("");
    // };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {/* {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{new Date().toLocaleString()}</span>
                    </p>

                ))} */}
				   {/* {messages.map((message) => ( */}
                    <p className={`chat__message ${"hii" && "chat__reciever"}`}>
                        <span className="chat__name">{"Peter"}</span>
                        {"message.message"}
                        <span className="chat__timestamp">{new Date().toLocaleString()}</span>
                    </p>

                {/* ))} */}

            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={""} type="submit">Send Message</button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default NewChat