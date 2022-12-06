import { useState,useEffect,Fragment } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/spinner";

const Login = () => {

  

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

const onChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const navigate = useNavigate();
const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );


  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && user) {
      navigate("/home");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData ={ email,password};
    console.log(user)
    console.log(userData);
    dispatch(login(userData))
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      {
        !user &&
     
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

            <Link
              to="/login"
              className="header-btn d-none d-lg-block  fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
            >
             
            </Link>
            <Link
              to="/register"
              className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"
            >
              Register
            </Link>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{
              backgroundImage: `url("https://i.ibb.co/2nXTr8V/800-emu-university-new-horizons.png")`,
            }}
          ></div>
          <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <div className="card shadow-none border-0 ms-auto me-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size display2-md-size mb-3">
                  LOG IN TO YOUR ACCOUNT
                  <br />
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-email text-grey-500 pe-0"></i>
                    <input
                      type="email"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Student / Staff Email Address"
                      name="email"
                      onChange={onChange}
                      value={email}
                      required
                    />
                  </div>
                  <div className="form-group icon-input mb-1">
                    <input
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Password"
                      name="password"
                      onChange={onChange}
                      value={password}
                      required
                    />
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                  </div>
                  <div className="form-check text-left mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input mt-2"
                      id="exampleCheck5"
                    />
                    <label className="form-check-label font-xsss text-grey-500">
                      Remember me
                    </label>
                    <a
                      href="/forgot"
                      className="fw-600 font-xsss text-grey-700 mt-1 float-right"
                    >
                      Forgot your Password?
                    </a>
                  </div>

                  <div className="col-sm-12 p-0 text-left">
                    <div className="form-group mb-1">
                      <button className="btn-group btn-dark form-control text-center style2-input fw-600 p-0">
                        Login
                      </button>
                      {/* {error && <div className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32" style={{fontColor:"red"}}>{error}</div>} */}
                    </div>

                    <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                      Do not have an account ?{" "}
                      <a href="/register" className="fw-700 ms-1">
                        Register
                      </a>
                    </h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
}
    </Fragment>
  );
};

export default Login;
