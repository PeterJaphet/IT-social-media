import { useEffect, Fragment, useState } from "react";
import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Rightchat from "../components/Rightchat";
import Pagetitle from "../components/Pagetitle";
import Appfooter from "../components/Appfooter";
import Popupchat from "../components/Popupchat";
import { toast } from "react-toastify";
import {
  getFriends,
  reset,
  followUser,
  userFollowing,
} from "../features/auth/friends/friendsSlice";
import { useSelector, useDispatch } from "react-redux";

const Member = () => {
  const dispatch = useDispatch();
  const  users  = useSelector(
    (state) => state.friends.users
  );
  const followings  = useSelector(
    (state) => state.friends.followings
  );
  const isSuccessFollow = useSelector(
    (state) => state.friends.isSuccessFollow
  );

  const user = JSON.parse(localStorage.getItem("user"));


  useEffect(() => {
    dispatch(userFollowing());
    dispatch(getFriends());

  }, [dispatch]);

  console.log(users)


  useEffect(() => {
    if (isSuccessFollow) {
      toast.success("Followed Successfully!!!");
      handleDispatchers();

      //  dispatch(userFollowing())
      //  dispatch(getFriends());
      //  console.log(users)
    }
  }, [dispatch, isSuccessFollow]);


  const handleDispatchers = () => {
    //console.log("i ran")
    dispatch(getFriends());
    dispatch(userFollowing());
    dispatch(reset());
  }


  // useEffect(() => {
  //   dispatch(getFriends());
  //   // return()=>{
  //       //dispatch(reset())
  //   // }
  // },[dispatch])

  // const handleFollow = ()=>{

  // }

  return (
    <Fragment>
      <Header />
      <Leftnav />
      <Rightchat />

      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left pe-0">
            <div className="row">
              <div className="col-xl-12">
                <Pagetitle title="Member" />

                <div className="row ps-2 pe-2">
                  {users &&
                    users.map((value) => {
                      return (
                        <div
                          key={value.userId}
                          className="col-md-3 col-sm-4 pe-2 ps-2"
                        >
                          <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                            <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                              <figure className="overflow-hidden avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                  className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                />
                              </figure>
                              <div className="clearfix w-100"></div>
                              <h4 className="fw-700 font-xsss mt-3 mb-0">
                                {value.firstName + " " + value.lastName}{" "}
                              </h4>
                              <p className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                                {value.email}
                              </p>
                              <span
                                className="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
                                onClick={() => {
                                  dispatch(
                                    followUser({
                                      fromId: user.message.data.user._id,
                                      toId: value._id,
                                    })
                                  );                                  
                                }}
                                //onClick={()=>{console.log(user.message.data.user._id,value._id)}}
                              >
                                FOLLOW
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popupchat />
      <Appfooter />
    </Fragment>
  );
};

export default Member;
