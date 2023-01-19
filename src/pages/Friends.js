import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Rightchat from "../components/Rightchat";
import ProfilecardTwo from "../components/ProfilecardTwo";
import { useLocation } from "react-router-dom";
import { padding } from "@mui/system";

export default function Friends() {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      setProfileData(user.message.data.user);
    }
  }, []);

  const location = useLocation();
  const following = location.state;

  const handleClick = () =>{
    console.log("hello")
  }

  return (
    <>
      <Header />
      <Leftnav />
      <Rightchat />

      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left pe-0">
            <div className="row">
              <div className="col-xl-12 mb-3">
                <ProfilecardTwo
                  name={profileData.firstName + " " + profileData.lastName}
                  email={profileData.email}
                />
              </div>

              <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                <div className="card-body d-block p-1">
                  <List
                    dense
                    sx={{
                      width: "100%",
                      //   maxWidth: 500,
                      bgcolor: "background.paper",
                     // bgcolor: "blue",
                      borderRadius: "5px"
                    }}
                  >
                    {following.map((item, index) => {
                      const labelId = `checkbox-list-secondary-label-${index}`;
                      return (
                        <ListItem
                          key={index}
                          secondaryAction={
                            <span
                              className="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
                              onClick={() => {}}
                            >
                              UNFOLLOW
                            </span>
                          }
                          disablePadding

                          dense
                          sx={{
                            bgcolor: "#e6ebeb",
                            borderRadius: "5px",
                            marginBottom:"5px",
                            padding:"8px"
                          }}
                          
                        >
                          <ListItemButton
                          onClick={()=>handleClick()}
                          >
                            
                            <ListItemAvatar>
                              <Avatar
                             
                              >
                                <img
                                  src={item.uploadUrl}
                                  alt=""
                                  height="45px"
                                 
                                />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              id={labelId}
                              primary={item.username}
                            />
                          
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
