import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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


import Grouppage from './pages/Grouppage';
import Userpage from './pages/Userpage';
import Authorpage from './pages/Authorpage';
import Hotelsingle from './pages/Hotelsingle';
import Analytics from './pages/Analytics';

function App() {
    return (
      <>
        <BrowserRouter>
              <Routes>
              <Route path="/" element={<Login />} />
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="settings" element={<Settings />} />
              <Route path="userpage" element={<Userpage />}/>
              <Route path="accountinformation" element={<Account/>}/>
              <Route path="contactinformation" element={<Contactinfo/>}/>
              <Route path="socialaccount" element={<Socialaccount />}/>
              <Route path="password" element={<Password />}/>
              <Route path="notification" element={<Notification />}/>
              <Route path="grouppage" element={<Grouppage/>}/>
              <Route path="message" element={<Chat />}/>
              <Route path="forgot" element={<Forgot />}/>
              <Route path="notfound" element={<Notfound />}/>
              <Route path="authorpage" element={<Authorpage />}/>
              <Route path="storie" element={<Storie />}/>
              <Route path="member" element={<Member />}/>
              <Route path="group" element={<Group />}/>
              <Route path="helpbox" element={<Helpbox />}/>
              <Route path="payment" element={<Payment />}/>
              <Route path="shop2" element={<ShopTwo />}/>

                   

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
        </BrowserRouter>
        <ToastContainer />
    </>
      );
    }
//     serviceWorker.register();
    
    export default App