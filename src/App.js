import React from "react";
import { Navigate, Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from "react-redux";


// Create Import File
import './main.scss';

// Common Layout
import Home from './pages/Home';

import Badge from './pages/Badge';
import Group from './pages/Group';
import Storie from './pages/Storie';
import Member from './pages/Member';
import Email from './pages/Email';
import Emailopen from './pages/Emailopen';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Contactinfo from './pages/Contactinfo';
import Socialaccount from './pages/Socialaccount';
import Password from './pages/Password';
import Payment from './pages/Payment';
import Notification from './pages/Notification';
import Helpbox from './pages/Helpbox';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Notfound from './pages/Notfound';
import Friends from './pages/Friends';


import ShopOne from './pages/ShopOne';
import ShopTwo from './pages/ShopTwo';
import ShopThree from './pages/ShopThree';
import Singleproduct from './pages/Singleproduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Chat from './pages/Chat';
import Live from './pages/Live';
import Job from './pages/Job';
import Event from './pages/Event';
import Hotel from './pages/Hotel';
import Videos from './pages/Videos';
import Comingsoon from './pages/Comingsoon';
import MainChat from './pages/mainChat';


import Grouppage from './pages/Grouppage';
import Userpage from './pages/Userpage';
import Authorpage from './pages/Authorpage';
import Hotelsingle from './pages/Hotelsingle';
import Analytics from './pages/Analytics';
import RandomPage from "./pages/RandomPage";
import Chatbody from "./pages/Chatbody";

function App() {

  const { user } = useSelector(
    (state) => state.auth
  );


const ProtectedRoute = ({children}) =>{
  if(!user){
    return <Navigate to = "/login"></Navigate>
  }
  return children;

}



    return (
      <>
              <Routes>
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
              <Route path="/userpage" element={<ProtectedRoute><Userpage /></ProtectedRoute>}/>
              <Route path="/accountinformation" element={<ProtectedRoute><Account/></ProtectedRoute>}/>
              <Route path="/contactinformation" element={<ProtectedRoute><Contactinfo/></ProtectedRoute>}/>
              <Route path="/socialaccount" element={<ProtectedRoute><Socialaccount /></ProtectedRoute>}/>
              <Route path="/password" element={<ProtectedRoute><Password /></ProtectedRoute>}/>
              <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>}/>
              <Route path="/grouppage" element={<ProtectedRoute><Grouppage/></ProtectedRoute>}/>
              <Route path="/message" element={<ProtectedRoute><Chat /></ProtectedRoute>}/>
              <Route path="/chat" element={<ProtectedRoute><MainChat /></ProtectedRoute>}/>
              <Route path="/forgot" element={<ProtectedRoute><Forgot /></ProtectedRoute>}/>
              <Route path="/notfound" element={<ProtectedRoute><Notfound /></ProtectedRoute>}/>
              <Route path="/authorpage" element={<ProtectedRoute><Authorpage /></ProtectedRoute>}/>
              <Route path="/storie" element={<ProtectedRoute><Storie /></ProtectedRoute>}/>
              <Route path="/member" element={<ProtectedRoute><Member /></ProtectedRoute>}/>
              <Route path="/group" element={<ProtectedRoute><Group /></ProtectedRoute>}/>
              <Route path="/helpbox" element={<ProtectedRoute><Helpbox /></ProtectedRoute>}/>
              <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>}/>
              <Route path="/shop2" element={<ProtectedRoute><ShopTwo /></ProtectedRoute>}/>
              <Route path="/event" element={<ProtectedRoute><Event /></ProtectedRoute>}/>
              <Route path="/friends" element={<ProtectedRoute><Friends /></ProtectedRoute>}/>
              <Route path="*" element={<Notfound />}/>
              <Route path="/chat/:id" element={
                <MainChat>
                  <Chatbody/>
                </MainChat>
              } />

                   

                    <Route exact path={`${process.env.PUBLIC_URL}/badge`} component={Badge}/>
                    
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/emailbox`} component={Email}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/emailopen`} component={Emailopen}/>                 
                    <Route exact path={`${process.env.PUBLIC_URL}/video`} component={Videos}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/analytics`} component={Analytics}/> 
                    
                    
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/shop1`} component={ShopOne}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/shop3`} component={ShopThree}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/singleproduct`} component={Singleproduct}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/checkout`} component={Checkout}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/live`} component={Live}/>                          
                    <Route exact path={`${process.env.PUBLIC_URL}/job`} component={Job}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/event`} component={Event}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/hotel`} component={Hotel}/>                      
                      
                    <Route exact path={`${process.env.PUBLIC_URL}/comingsoon`} component={Comingsoon}/>  
                    <Route exact path={`${process.env.PUBLIC_URL}/hoteldetails`} component={Hotelsingle}/> 
                  
              </Routes>

        <ToastContainer />
    </>
      );
    }
    
    export default App