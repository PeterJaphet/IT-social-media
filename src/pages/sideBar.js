import React from 'react';
import "./sideBar.css";
import SideChat from "./sideChat";
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from "@material-ui/icons";

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar_search">
            <SearchOutlined />
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start New" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SideChat />
                <SideChat />
                <SideChat />
            </div>

        </div>
    )
}

export default SideBar