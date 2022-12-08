import { React } from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import {
  RiHeartFill,
  RiHeartLine,
  RiMessage3Line,
  RiMessage3Fill,
  RiMessage,
  RiShareForward2Line,
  RiSendPlane2Fill,
} from "react-icons/ri";

import {
  addLove,
  addComment,
  reset,
  getComments,
} from "../features/auth/post/postSlice";

function Postview(props) {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // const [loveStatus, setLoveStatus] = useState(false);
  const [commentStatus, setCommentStatus] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [sendButtonDisable, setSendButtonDisable] = useState(true);
  const dispatch = useDispatch();

  const { comments } = useSelector((state) => state.post);

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleActive = () => setIsActive(!isActive);
  const user = JSON.parse(localStorage.getItem("user"));

  const menuClass = `${isOpen ? " show" : ""}`;
  const emojiClass = `${isActive ? " active" : ""}`;
  const [loveStatus, setLoveStatus] = useState(false);

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('likeStatus'));
  //   console.log(data);
  //   if ( data !== null ) setLoveStatus(JSON.parse(data));

  //    },[])

  // useEffect(() => {
  //   localStorage.setItem('likeStatus', JSON.stringify(loveStatus))
  //   console.log(loveStatus)
  // },[loveStatus])

  function handleLove() {
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log(props.userLike)
    // console.log(user.message.data.user._id)
    // console.log(props.likes)

    if (!props.userLike.includes(user.message.data.user._id)) {
      setLoveStatus(true);
      dispatch(
        addLove({ postId: props._id, userId: user.message.data.user._id })
      );
      console.log(props.userLike);
      console.log(user.message.data.user._id);
      console.log(props.likes);
    } else {
      console.log(props.userLike);
      setLoveStatus(false);
      dispatch(
        addLove({ postId: props._id, userId: user.message.data.user._id })
      );
    }
  }

  function handleCommentButtonClick(e) {
    setCommentStatus(!commentStatus);
  }

  function handleCommentContentChange(e) {
    e.preventDefault();

    setCommentContent(e.target.value);

    if (commentContent.length > 0) {
      setSendButtonDisable(false);
    } else {
      setSendButtonDisable(true);
    }
  }

  return (
    <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
      <div className="card-body p-0 d-flex">
        <figure className="avatar me-3">
          <img
            src={`assets/images/${props.avater}`}
            alt="avater"
            className="shadow-sm rounded-circle w45"
          />
        </figure>
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          {" "}
          {} {props.username}{" "}
          <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
            {" "}
            {/* {console.log(props.createdAt)} */}
            {/* {formatDistanceToNow(new Date(props.createdAt), {addSuffix:true})} */}
            {timeAgo.format(new Date(props.createdAt).getTime())}
          </span>
        </h4>
        <div className="ms-auto pointer">
          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
        </div>
      </div>
      {/* {postvideo ? (
        <div className="card-body p-0 mb-3 rounded-3 overflow-hidden uttam-die">
          <a href="/defaultvideo" className="video-btn">
            <video autoPlay loop className="float-right w-100">
              <source src={`assets/images/${postvideo}`} type="video/mp4" />
            </video>
          </a>
        </div>
      ) : (
        ""
      )} */}
      <div className="card-body p-0 me-lg-5">
        <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
          {} {props.text}{" "}
          {/* <a href="/defaultvideo" className="fw-600 text-primary ms-2">
            See more
          </a> */}
        </p>
      </div>
      {props.uploadUrl ? (
        <div className="card-body d-block p-0 mb-3">
          <div className="row ps-2 pe-2">
            <div className="col-sm-12 p-1">
              <img
                src={props.uploadUrl}
                className="rounded-3 w-100"
                alt="post"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="card-body d-flex p-0">
        <div
          className="emoji-bttn pointer d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
          onClick={toggleActive}
        >
          {/* <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>{" "} */}
          {/* <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i> */}
          <span onClick={handleLove}>
            {props.userLike.includes(user.message.data.user._id) ? (
              <RiHeartFill className="text-danger me-2 btn-round-sm " />
            ) : (
              <RiHeartLine className="text-danger me-2 btn-round-sm " />
            )}
          </span>
          <span>
            {props.userLike.length > 0 ? props.userLike.length : null}
          </span>
          {/* <span>{props.likes}</span>  */}
        </div>
        <span
          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
          onClick={handleCommentButtonClick}
        >
          {/* <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i> */}
          <span className="d-none-xss">
            <RiMessage3Line className=" me-2 btn-round-sm " />
          </span>
        </span>
        <span className="mt-1 p-1">
          {comments.length > 0 ? comments.length : ""}
        </span>
        <div
          className={`pointer ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss ${menuClass}`}
          //   id={`dropdownMenu${id}`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={toggleOpen}
        >
          <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i>
          <span className="d-none-xs">Share</span>
        </div>
        <div
          className={`dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg right-0 ${menuClass}`}
          //   aria-labelledby={`dropdownMenu${id}`}
        >
          <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
            Share{" "}
            <i className="feather-x ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2"></i>
          </h4>
          <div className="card-body p-0 d-flex">
            <ul className="d-flex align-items-center justify-content-between mt-2">
              <li className="me-1">
                <span className="btn-round-lg pointer bg-facebook">
                  <i className="font-xs ti-facebook text-white"></i>
                </span>
              </li>
              <li className="me-1">
                <span className="btn-round-lg pointer bg-twiiter">
                  <i className="font-xs ti-twitter-alt text-white"></i>
                </span>
              </li>
              <li className="me-1">
                <span className="btn-round-lg pointer bg-linkedin">
                  <i className="font-xs ti-linkedin text-white"></i>
                </span>
              </li>
              <li className="me-1">
                <span className="btn-round-lg pointer bg-instagram">
                  <i className="font-xs ti-instagram text-white"></i>
                </span>
              </li>
              <li>
                <span className="btn-round-lg pointer bg-pinterest">
                  <i className="font-xs ti-pinterest text-white"></i>
                </span>
              </li>
            </ul>
          </div>
          <div className="card-body p-0 d-flex">
            <ul className="d-flex align-items-center justify-content-between mt-2">
              <li className="me-1">
                <span className="btn-round-lg pointer bg-tumblr">
                  <i className="font-xs ti-tumblr text-white"></i>
                </span>
              </li>
              <li className="me-1">
                <span className="btn-round-lg pointer bg-youtube">
                  <i className="font-xs ti-youtube text-white"></i>
                </span>
              </li>
              <li className="me-1">
                <span className="btn-round-lg pointer bg-flicker">
                  <i className="font-xs ti-flickr text-white"></i>
                </span>
              </li>
              <li className="me-1">
                <span className="btn-round-lg pointer bg-black">
                  <i className="font-xs ti-vimeo-alt text-white"></i>
                </span>
              </li>
              <li>
                <span className="btn-round-lg pointer bg-whatsup">
                  <i className="font-xs feather-phone text-white"></i>
                </span>
              </li>
            </ul>
          </div>
          <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
            Copy Link
          </h4>
          <i className="feather-copy position-absolute right-35 mt-3 font-xs text-grey-500"></i>
          <input
            type="text"
            placeholder="https://socia.be/1rGxjoJKVF0"
            className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
          />
        </div>
      </div>

      {commentStatus && (
        <form action="#">
          <div className="row">
            <div className="col-lg-11 mb-1 mt-3">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Comment"
                  value={commentContent}
                  onChange={handleCommentContentChange}
                />
              </div>
            </div>

            <div className="col-lg-1 mt-4">
                <span
                disabled={sendButtonDisable}
                onClick={()=>{dispatch(addComment({}))}}
                >
              <RiSendPlane2Fill className="text-success me-2 btn-round-sm " />
              </span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Postview;
