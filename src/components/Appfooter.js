import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Appfooter extends Component {
    render() {
        return (
            <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
                <Link to="/home" className="nav-content-bttn nav-center"><i className="feather-home"></i></Link>
                <Link to="/video" className="nav-content-bttn"><i className="feather-package"></i></Link>
                <Link to="/live" className="nav-content-bttn" data-tab="chats"><i className="feather-layout"></i></Link>           
                <Link to="/shop2" className="nav-content-bttn"><i className="feather-layers"></i></Link>
                <Link to="/settings" className="nav-content-bttn"><i className="feather-settings"></i></Link>
            </div>        
        );
    }
}

export default Appfooter;