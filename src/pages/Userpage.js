import {Fragment, useEffect,useState} from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

import Profiledetail from '../components/Profiledetail';
import Profilephoto from '../components/Profilephoto';
import ProfilecardThree from '../components/ProfilecardThree';
import ProfilecardTwo from '../components/ProfilecardTwo';
import Createpost from '../components/Createpost';
import Events from '../components/Events';
import Postview from '../components/Postview';
import Load from '../components/Load';
import { getUserPosts } from "../features/auth/post/postSlice";
import { useDispatch, useSelector } from "react-redux";
// import emuBanner from '../../public/assets/images/emuPic.png'

const Userpage = ()=> {

    const [profileData,setProfileData] = useState([]);

// Get Data from local storage
const user = JSON.parse(localStorage.getItem("user"));
useEffect(() => {
   
    console.log(user);
     if (user) {
       setProfileData(user.message.data.user);
     }
   }, []);

   const dispatch = useDispatch();
    

   const {userPostItems} = useSelector((state)=>state.post);

   useEffect(() => {
      dispatch(getUserPosts(user.message.data.user._id))
      console.log(user.message.data.user._id)

   },[dispatch]);

   console.log(profileData._id)

        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />


                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0">
                            <div className="row">
                                <div className="col-xl-12 mb-3">
                                   
                                    {/* <ProfilecardThree 
                                     name={profileData.firstName+" "+profileData.lastName} 
                                     email={profileData.email}
                                    /> */}
                                    <ProfilecardTwo 
                                    name={profileData.firstName+" "+profileData.lastName} 
                                    email={profileData.email}
                                    noPost={userPostItems.length}
                                    />
                                </div>
                                <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                                    <Profiledetail />
                                    <Profilephoto />
                                    <Events />
                                </div>
                                <div className="col-xl-8 col-xxl-9 col-lg-8">
                                    <Createpost />
                                    {userPostItems && userPostItems.map((post)=>{
                                        return(
                                        <Postview 
                                        key={post.post._id}
                                        _id = {post.post._id}
                                        userId={post.post.userId}
                                        text={post.post.text}
                                        uploadUrl={post.post.uploadUrl}
                                        createdAt = {post.post.createdAt}
                                        avater="user.png"
                                        username = {post.user.firstName+" "+post.user.lastName}
                                        userLike ={post.post.userLike}
                                        likes={post.post.likes}
                                        commentList={post.comments}
                                       
                                        />
                                        )
                                    })}
                                    <Load />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Popupchat />
                <Appfooter /> 

            </Fragment>
        );
    
}

export default Userpage;