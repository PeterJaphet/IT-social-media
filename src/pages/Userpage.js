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
// import emuBanner from '../../public/assets/images/emuPic.png'

const Userpage = ()=> {

    const [profileData,setProfileData] = useState([]);

// Get Data from local storage

useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
     if (user) {
       setProfileData(user.message.data.user);
 
     }
   }, []);

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
                                    />
                                </div>
                                <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                                    <Profiledetail />
                                    <Profilephoto />
                                    <Events />
                                </div>
                                <div className="col-xl-8 col-xxl-9 col-lg-8">
                                    <Createpost />
                                    {/* <Postview id="32" postvideo="" postimage="post.png" avater="user.png" user="Surfiya Zakir" time="22 min ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Postview id="31" postvideo="" postimage="post.png" avater="user.png" user="David Goria" time="22 min ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Postview id="33" postvideo="" postimage="post.png" avater="user.png" user="Anthony Daugloi" time="2 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." /> */}
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