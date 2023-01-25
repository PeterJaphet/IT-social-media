// import {Link} from 'react-router-dom'
// import { useEffect, useRef, useState } from 'react';
// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Sidebar from './Sidebar'
// import './mainChat.css'
// import{useSelector,useDispatch} from 'react-redux';
// import {
//     userFollowing, reset
//   } from "../features/auth/friends/friendsSlice";

// import Chatbody from './Chatbody'

// function MainChat() {
//   const dispatch = useDispatch();
//   const {followings}  = useSelector(
//     (state) => state.friends
//   );

//   useEffect(() => {
//     dispatch(userFollowing())

//  },[dispatch]);

//   return (
//     <>
//     <Header />
//     <div className="main-content right-chat-active">
//           <div className="middle-sidebar-bottom">
//             <div
//               className="middle-sidebar-left pe-0"
//               style={{ maxWidth: "100%" }}
//             >
//               <div className="root1">
//        <div>
//         <Sidebar
//          followings={followings.followinglist}
//         />
//         </div>
//         <div>
//         <Chatbody />
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>

// </>

//   );
// }

// export default MainChat;

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import Sidebar from "./Sidebar";
import "./mainChat.css";
import { useSelector, useDispatch } from "react-redux";
import { userFollowing, reset } from "../features/auth/friends/friendsSlice";

import Chatbody from "./Chatbody";
import RandomPage from "./RandomPage";

function MainChat({ children }) {
  const dispatch = useDispatch();
  const { followings } = useSelector((state) => state.friends);

  useEffect(() => {
    dispatch(userFollowing());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div
            className="middle-sidebar-left pe-0"
            style={{ maxWidth: "100%" }}
          >
            <div className="root1">
                <RandomPage children={children} followings={followings.followinglist } />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainChat;
