import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../features/auth/post/postSlice";
import { userFollowers, userFollowing } from "../features/auth/friends/friendsSlice";

const ProfilecardTwo = (props) => {
  const dispatch = useDispatch();

  const { postItems } = useSelector((state) => state.post);
  const { followings } = useSelector((state) => state.friends);
  const { followers } = useSelector((state) => state.friends);
  const {userPostItems} = useSelector((state)=>state.post);
  useEffect(() => {
    dispatch(getPosts());
    dispatch(userFollowing());
    dispatch(userFollowers());
  }, [dispatch]);
  // useEffect(() => {

  //  },[dispatch]);

  console.log(postItems);
  console.log(followings);
  console.log(followers);

  return (
    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3 overflow-hidden">
      <div
        className="card-body position-relative h240 bg-image-cover bg-image-center"
        style={{ backgroundImage: `url("assets/images/emuPic.png")` }}
      ></div>
      <div className="card-body d-block pt-4 text-center position-relative">
        <input style={{ display: "none" }} type="file" id="file"></input>
          
            
        <label htmlFor="file">  
        <figure className="avatar mt--6 position-relative w75 z-index-1 w100 z-index-1 ms-auto me-auto">
          <img
            src="assets/images/user.png"
            alt="avater"
            className="p-1 bg-white rounded-xl w-100"
          />
        </figure>
        </label>

        <h4 className="font-xs ls-1 fw-700 text-grey-900">
          {props.name}
          <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
            {props.email}
          </span>
        </h4>
        <div className="d-flex align-items-center pt-0 position-absolute left-15 top-10 mt-4 ms-2">
          <Link to="/userpage">
            <h4 className="font-xsssss text-center d-none d-lg-block text-grey-500 fw-600 ms-2 me-2">
              <b className="text-grey-900 mb-1 font-sm fw-700 d-inline-block ls-3 text-dark">
                {props.noPost>1 ? props.noPost : 0}{" "}
              </b>{" "}
              Posts
            </h4>
          </Link>
          <Link to="/friends" state={followers.followerslist} action={""}>
            {" "}
            <h4 className="font-xsssss text-center d-none d-lg-block text-grey-500 fw-600 ms-2 me-2">
              <b className="text-grey-900 mb-1 font-sm fw-700 d-inline-block ls-3 text-dark">
              {followers ? followers.followerscount : 0}{" "}
              </b>{" "}
              Followers
            </h4>
          </Link>
          <Link to="/friends" state={followings.followinglist} action={"UNFOLLOW"}>
            {" "}
            <h4 className="font-xsssss text-center d-none d-lg-block text-grey-500 fw-600 ms-2 me-2">
              <b className="text-grey-900 mb-1 font-sm fw-700 d-inline-block ls-3 text-dark">
                {followings ? followings.followingcount : 0}{" "}
              </b>{" "}
              Followings
            </h4>
          </Link>
        </div>
        <div className="d-flex align-items-center justify-content-center position-absolute right-15 top-10 mt-2 me-2">
          <Link
            to="/member"
            className="d-none d-lg-block bg-success p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3"
          >
            Add Friend
          </Link>
          <Link
            to="/emailbox"
            className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"
          >
            <i className="feather-mail font-md"></i>
          </Link>
          <Link
            to="/home"
            id="dropdownMenu8"
            className="d-none d-lg-block btn-round-lg ms-2 rounded-3 text-grey-700 bg-greylight"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="ti-more font-md"></i>
          </Link>
          <div
            className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
            aria-labelledby="dropdownMenu8"
          >
            <div className="card-body p-0 d-flex">
              <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">
                Save Link{" "}
                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                  Add this to your saved items
                </span>
              </h4>
            </div>
            <div className="card-body p-0 d-flex mt-2">
              <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">
                Hide Post{" "}
                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                  Save to your saved items
                </span>
              </h4>
            </div>
            <div className="card-body p-0 d-flex mt-2">
              <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">
                Hide all from Group{" "}
                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                  Save to your saved items
                </span>
              </h4>
            </div>
            <div className="card-body p-0 d-flex mt-2">
              <i className="feather-lock text-grey-500 me-3 font-lg"></i>
              <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-0">
                Unfollow Group{" "}
                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                  Save to your saved items
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body d-block w-100 shadow-none mb-0 p-0 border-top-xs">
        <ul
          className="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4"
          id="pills-tab"
          role="tablist"
        >
          <li className="active list-inline-item me-5">
            <a
              className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
              href="#navtabs1"
              data-toggle="tab"
            >
              About
            </a>
          </li>
          {/* <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs2" data-toggle="tab">Membership</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs3" data-toggle="tab">Discussion</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs4" data-toggle="tab">Video</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs3" data-toggle="tab">Group</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs1" data-toggle="tab">Events</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 me-sm-5 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs7" data-toggle="tab">Media</a></li> */}
          <li className="list-inline-item ms-auto mt-3 me-4">
            <a href="" className="">
              <i className="ti-more-alt text-grey-500 font-xs"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilecardTwo;
