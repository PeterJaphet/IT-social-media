import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import {Link} from 'react-router-dom'



const Register = () => {



  
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [address, setAddress] = useState("");
  // const [genderType, setGenderType] = useState(0);
  // const [userRole, setUserRole] = useState(0);
  // const [dateOfBirth, setDateOfBirth] = useState("");
  // const [password, setPassword] = useState = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [firstName, setFirstName] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phoneNo: "",
    address: "",
    genderType: "",
    userRole:0,
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  const {
    firstName,
    lastName,
    email,
    username,
    phoneNo,
    address,
    genderType,
    userRole,
    dateOfBirth,
    password,
    confirmPassword,
  } = formData;


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(()=>{
    if(isError) {
      toast.error(message);
    }
    if(isSuccess||user){
      navigate('login')
    }
    dispatch(reset());

  },[user,isError,isSuccess,message,navigate,dispatch])

const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        username,
        phoneNo,
        address,
        genderType,
        userRole,
        dateOfBirth,
        password,
      };
      dispatch(register(userData));
    }
  };

  return (
    <Fragment>
      <div className="main-wrap">
        <div className="nav-header bg-transparent shadow-none border-0">
          <div className="nav-top w-100">
            <a href="/">
              <i className="feather-zap text-success display1-size me-2 ms-0"></i>
              <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                EMU-IT{" "}
              </span>{" "}
            </a>
            <button className="nav-menu me-0 ms-auto"></button>

            <a
              href="/login"
              className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
            >
              LOGIN
            </a>
            <a
              href="/register"
              className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"
            >
              REGISTER
            </a>
          </div>
        </div>

        <div className="row">
          <div
            className="col-xl-6 d-none d-xl-block p-0 vh-110 bg-image-cover bg-no-repeat"
            style={{
              backgroundImage: `url("https://i.ibb.co/2nXTr8V/800-emu-university-new-horizons.png")`,
            }}
          ></div>
          <div className="card shadow-none border-0 ms-auto me-auto login-card">
            <div className="card-body rounded-0 text-left">
              <h2 className="fw-700 display1-size display2-md-size mb-4">
                CREATE YOUR ACCOUNT <br />
              </h2>
              <form onSubmit={onSubmit}>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-user text-grey-500 pe-0"></i>
                  <input
                    type="text"
                    className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Firstname"
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                    
                    
                  />
                </div>

                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-user text-grey-500 pe-0"></i>
                  <input
                    type="text"
                    className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Lastname"
                    name="lastName"
                    onChange={onChange}
                    value={lastName}
                    
                  />
                </div>

                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-email text-grey-500 pe-0"></i>
                  <input
                    type="email"
                    className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Student / Staff Email Address"
                    name="email"
                    onChange={onChange}
                    value={email}
                    
                  />
                </div>

                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-user text-grey-500 pe-0"></i>
                  <input
                    type="text"
                    className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Username"
                    name="username"
                    onChange={onChange}
                    value={username}
                    
                  />
                </div>

                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-mobile text-grey-500 pe-0"></i>
                  <input
                    type="text"
                    className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Phone Number"
                    name="phoneNo"
                    onChange={onChange}
                    value={phoneNo}
                    
                  />
                </div>

                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-location-pin text-grey-500 pe-0"></i>
                  <input
                    type="text"
                    className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Address"
                    name="address"
                    onChange={onChange}
                    value={address}
                    
                  />
                </div>

                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-calendar text-grey-500 pe-0"></i>
                    <input
                      type="text"
                      name="dob"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Date of Birth:  DD/MM/YYYY.."
                    />
                  </div>

                  <div className="form-control mb-3">
                    <select className="form-select style2-input text-grey-900 font-x fw-400">
                    <option value="none" selected disabled>Gender</option>
                      <option name="Male" value="Male">Male</option>
                      <option name="Female" value="Female">Female</option>
                      <option name="Other" value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                    <input
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group icon-input mb-1">
                    <input
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Confirm Password"
                    />
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                  </div>

                <div className="form-check text-left mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input mt-2"
                    id="exampleCheck2"
                  />
                  <label className="form-check-label font-xsss text-grey-500">
                    Accept Term and Conditions
                  </label>
                </div>
              

              <div className="col-sm-12 ps-0 text-left">
                <div className="form-group mb-1">
                  <button type = "submit" className="btn-group btn-dark form-control text-center style2-input fw-600 p-0">
                    <Link className="text-center text-white" to="/register">
                      SIGN UP
                    </Link>
                  </button>
                </div>
                
                <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                  Already have account{" "}
                  <a href="/login" className="fw-700 ms-1">
                    Login
                  </a>
                </h6>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
