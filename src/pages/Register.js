import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import "./register.css";
import Spinner from "../components/spinner";

const Register = () => {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phoneNo: "",
    address: "",
    genderType: "Male",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let {
    firstName,
    lastName,
    email,
    username,
    phoneNo,
    address,
    genderType,
    dateOfBirth,
    password,
    confirmPassword,
  } = formData;

  let [userRole] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/home");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  //Assign data from the Form to the state

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleError = () => {
    setFormErrors(validateForm(formData));
    setIsSubmit(true);
  };

  const validateForm = (values) => {
    const errors = {};
    const userRegex = /^([a-zA-Z]+)(\d?)+/g;
    const studentRegex =
      /^(\d{6,8})@(([eE][mM][uU])\.([eE][dD][uU])\.([tT][rR]))$/;
    const instructorRegex =
      /^([a-zA-Z]+\.[a-zA-Z\d?]+)@(([eE][mM][uU])\.([eE][dD][uU])\.([tT][rR]))$/;
    const passRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const phoneRegex = /^\+[0-9]{10,14}$/;

    // Handle Username

    const userTest = userRegex.test(values.username);
    if (!userTest && values.username !== "") {
      errors.username = "Invalid Username !";
    }

    //Handle Email
    if (
      !studentRegex.test(values.email) &&
      !instructorRegex.test(values.email) &&
      values.email !== ""
    ) {
      errors.email = "Invalid Email Address !";
    }

    //Handle PhoneNumber
    if (!phoneRegex.test(values.phoneNo) && values.phoneNo !== "") {
      errors.phoneNo = "Invalid Phone Number !";
    }

    // Handle Password

    if (!passRegex.test(values.password) && values.password !== "") {
      errors.password = "Invalid Password !";
    }
    return errors;
  };

  // Handle onSubmit Form
  const onSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formData));
    setIsSubmit(true);
    if (genderType === "Male") {
      parseInt(genderType);
      genderType = 1;
    }
    if (genderType === "Female") {
      parseInt(genderType);
      genderType = 2;
    }
    const studentRegex =
      /^(\d{6,8})@(([eE][mM][uU])\.([eE][dD][uU])\.([tT][rR]))$/;
    const instructorRegex =
      /^([a-zA-Z]+\.[a-zA-Z\d?]+)@(([eE][mM][uU])\.([eE][dD][uU])\.([tT][rR]))$/;

    if (studentRegex.test(email)) {
      userRole = 1;
    }
    if (instructorRegex.test(email)) {
      userRole = 2;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else if (Object.keys(formErrors).length === 0 && isSubmit) {
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
        confirmPassword,
      };
      console.log(userData);
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    
    <Fragment>
      {!user && 
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
            {/* <a
              href="/register"
              className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"
            >
              REGISTER
            </a> */}
          </div>
        </div>

        <div className="row">
          <div
            className="col-xl-6 d-none d-xl-block p-0 vh-110 bg-image-cover bg-no-repeat"
            style={{
              backgroundImage: `url("https://i.ibb.co/JBy8jDQ/Untitled-design.png")`,
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
                    onChange={(e) => {
                      onChange(e);
                    }}
                    required
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
                    required
                  />
                </div>
                <p
                  style={{
                    color: "red",
                    fontFamily: "Lucida",
                    margin: "0px",
                    fontSize: "16px",
                  }}
                >
                  {formErrors.email}
                </p>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-email text-grey-500 pe-0"></i>
                  <input
                    type="email"
                    className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Student / Staff Email Address"
                    name="email"
                    onChange={(e) => {
                      onChange(e);
                    }}
                    value={email}
                    onBlur={handleError}
                    required
                  />
                </div>
                <p
                  style={{
                    color: "red",
                    fontFamily: "Lucida",
                    margin: "0px",
                    fontSize: "16px",
                  }}
                >
                  {formErrors.username}
                </p>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-user text-grey-500 pe-0"></i>
                  <input
                    type="text"
                    className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Username"
                    name="username"
                    onChange={(e) => onChange(e)}
                    onFocus={(e) => {
                      toast.info(
                        "Username should be more than 3 characters and should not start with a number"
                      );
                    }}
                    value={username}
                    onBlur={handleError}
                    required
                  />
                </div>

                <p
                  style={{
                    color: "red",
                    fontFamily: "Lucida",
                    margin: "0px",
                    fontSize: "16px",
                  }}
                >
                  {formErrors.phoneNo}
                </p>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-mobile text-grey-500 pe-0"></i>
                  <input
                    type="tel"
                    className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Phone Number"
                    name="phoneNo"
                    onFocus={(e) => {
                      toast.info(
                        "Phone Number should start with country code e.g +90, +234"
                      );
                    }}
                    onChange={(e) => {
                      onChange(e);
                    }}
                    onBlur={handleError}
                    value={phoneNo}
                    required
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
                    name="dateOfBirth"
                    className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Date of Birth"
                    onChange={onChange}
                    value={dateOfBirth}
                    onFocus={(e) => {
                      e.target.type = "date";
                      e.target.max = "2006-12-31";
                    }}
                    onBlur={(e) => (e.target.type = "text")}
                    required
                  />
                </div>

                <div className="form-control mb-3">
                  <select
                    className="form-select style2-input text-grey-900 font-x fw-400"
                    name="genderType"
                    onChange={(e) => {
                      onChange(e);
                    }}
                    value={genderType}
                    placeholder="Select Gender"
                  >
                    <option name="Male" value="Male">
                      Male
                    </option>
                    <option name="Female" value="Female">
                      Female
                    </option>
                  </select>
                </div>
                <p
                  style={{
                    color: "red",
                    fontFamily: "Lucida",
                    margin: "0px",
                    fontSize: "16px",
                  }}
                >
                  {formErrors.password}
                </p>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                  <input
                    type="Password"
                    className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                    placeholder="Password"
                    name="password"
                    onChange={onChange}
                    value={password}
                    onFocus={(e) => {
                      toast.info(
                        "Password should have at least 8 characters, one UpperCase, one LowerCase and a special character eg '@,!,$'"
                      );
                    }}
                    onBlur={handleError}
                    required
                  />
                </div>
                <p
                  style={{
                    color: "red",
                    fontFamily: "Lucida",
                    margin: "0px",
                    fontSize: "16px",
                  }}
                >
                  {formErrors.confirmPassword}
                </p>
                <div className="form-group icon-input mb-1">
                  <input
                    type="Password"
                    className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange={onChange}
                    value={confirmPassword}
                    required
                  />
                  <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                </div>

                <div className="form-check text-left mb-3">
                  {/* <input
                    type="checkbox"
                    className="form-check-input mt-2"
                    id="exampleCheck2"
                  />
                  <label className="form-check-label font-xsss text-grey-500">
                    Accept Term and Conditions
                  </label> */}
                </div>

                <div className="col-sm-12 ps-0 text-left">
                  <div className="form-group mb-1">
                    <button
                      type="submit"
                      className="btn-group btn-dark form-control text-center style2-input fw-600 p-0"
                    >
                      <Link className="text-center text-white" to="/register">
                        SIGN UP
                      </Link>
                    </button>
                  </div>

                  <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                    Already have account{" "}
                    <Link to="/login" className="fw-700 ms-1">
                      Login
                    </Link>
                  </h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>}
    </Fragment>
  );
};

export default Register;
