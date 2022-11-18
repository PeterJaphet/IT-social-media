import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import imageCompression from "browser-image-compression";
import { createPost, reset } from "../features/auth/post/postSlice";
import Load from "../components/Load";
import { getPosts} from "../features/auth/post/postSlice";

function Createpost() {
  const [isOpen, setIsOpen] = useState(false);
  const fileInput = useRef(null);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [file64String, setFile64String] = useState(null);
  const [uploadUrl, setUploadUrl] = useState(null);
  const [userStatus, setUserStatus] = useState([]);
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState();
  const [disable, setDisable] = useState(false);
  

  const dispatch = useDispatch();
  const {isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.post
  );

  const toggleOpen = () => setIsOpen(!isOpen);

 // Get Data from local storage
  useEffect(() => {
   const user = JSON.parse(localStorage.getItem("user"));
   console.log(user);
    if (user) {
      setUserData(user.message.data.user);
      setUserId(user.message.data.user._id);
      console.log(userId)
    }
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success("posted Successfully");
      dispatch(getPosts())
      dispatch(reset())
    
    }
  }, [isSuccess,isError,dispatch]);

  //handle Upload
  const handleFileSelection = (e) => {
    setFile64String(null);
    if (e.target.files < 1 || !e.target.validity.valid) {
      return;
    }
    compressImageFile(e);
  };

  //handle click for image Selection
  const handleUpload = () => {
    console.log(userData.address);
    fileInput.current.click();
    console.log(userId);
  };

  // converting to base64
  function fileToBase64(file, cb) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.oneerror = function (error) {
      cb(error, null);
    };
  }

  //compressing image
  async function compressImageFile(event) {
    const imageFile = event.target.files[0];

    const options = {
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);
      //input file is compressed tin compressedFile, now write further logic here
      fileToBase64(compressedFile, (err, result) => {
        if (result) {
          setFile(result);
          setUploadUrl(result);
          setFile64String(String(result.split(",")[1]));
        }
      });
    } catch (error) {
      setFile64String(null);
    }
  }


  async function handleSubmit(e)  {
    e.preventDefault();
    const postDetails = { userId, text, uploadUrl };
    if(text !=="" || uploadUrl !==null){
      setDisable(false)
    dispatch(createPost(postDetails));
    setText("");
    setUploadUrl(null);
  
  }
    else{
      setDisable(true)
       toast.warning("Enter Post Details");
    }
    
  };

  const menuClass = `${isOpen ? " show" : ""}`;

  return (
    <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
      {isLoading && <Load />}
      <div className="card-body p-0">
        <label className="font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center">
          <i
            className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"
              onClick={handleSubmit}
              disabled ={disable}
          ></i>
          Create Post
        </label>
      </div>
      <div className="card-body p-0 mt-3 position-relative">
        <figure className="avatar position-absolute ms-2 mt-1 top-5">
          <img
            src="assets/images/user.png"
            alt="icon"
            className="shadow-sm rounded-circle w30"
          />
        </figure>
        <textarea
          name="message"
          className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
          cols="30"
          rows="10"
          placeholder={"what is on your mind? " + userData.firstName }
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="card-body d-flex p-0 mt-0">
        {/* <a href="#video" className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"><i className="font-md text-danger feather-video me-2"></i><span className="d-none-xs">Live Video</span></a> */}
        {/* <a href="#activity" className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"><i className="font-md text-warning feather-camera me-2"></i><span className="d-none-xs">Feeling/Activity</span></a> */}
        <input
          style={{ display: "none" }}
          type="file"
          accept=".jpg, .jpeg, .png .mp4 .mov"
          onChange={handleFileSelection}
          ref={fileInput}
        />
        <label className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4">
          <i
            className="font-md text-success feather-image me-2"
            onClick={handleUpload}
          ></i>
          <span className="d-none-xs" onClick={handleUpload}>
            Photo/Video
          </span>
        </label>

        <div
          className={`ms-auto pointer ${menuClass}`}
          id="dropdownMenu4"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={toggleOpen}
        >
          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
        </div>
        <div
          className={`dropdown-menu p-4 right-0 rounded-xxl border-0 shadow-lg ${menuClass}`}
          aria-labelledby="dropdownMenu4"
        >
          <div className="card-body p-0 d-flex">
            <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 pointer">
              Save Link{" "}
              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                Add this to your saved items
              </span>
            </h4>
          </div>
          <div className="card-body p-0 d-flex mt-2">
            <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 pointer">
              Hide Post{" "}
              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                Save to your saved items
              </span>
            </h4>
          </div>
          <div className="card-body p-0 d-flex mt-2">
            <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 pointer">
              Hide all from Group{" "}
              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                Save to your saved items
              </span>
            </h4>
          </div>
          <div className="card-body p-0 d-flex mt-2">
            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4 pointer">
              Unfollow Group{" "}
              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                Save to your saved items
              </span>
            </h4>
          </div>
        </div>
      </div>
      {<img src={uploadUrl} alt="" className="img-fluid rounded-xxl mb-2" />}
    </div>
  );
};

export default Createpost;
