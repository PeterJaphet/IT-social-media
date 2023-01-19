import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';



const Sidebar = (props) => {

   

  
    console.log(props.followings)
    const handleClick = () => {

    }

    return  (
    
    <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar bg-white theme-dark-bg">
    <div className='sidebar'>
         <form className="chat-form">
                      <div className="form-group">
                        <input type="text" placeholder="Search" />
                      </div>
                      <button className="bg-current">
                        <i className="ti-arrow-right text-white"></i>
                      </button>
                      <hr />
                      {
               props.followings? props.followings.map((item, index) => (
                    <Link key={index}>
                        <div className={`sidebar__menu__item active`} onClick={()=>{handleClick()}}>
                             <div className="message-user">
                            {/* <figure className="avatar"> */}
                              {/* <img src={item.uploadUrl} alt="avater" /> */}
                            {/* </figure> */}
                            {/* <div> */}
                              <h5>{item.username}</h5>
                              <div className="time">01:35 PM</div>
                            {/* </div> */}
                            </div>
                            {/* <hr /> */}
                        </div>
                        <hr />
                    </Link>
                    
                )) : <div></div>
            }
                    </form>
            
        
        </div>
    </div>
    
)};

export default Sidebar;