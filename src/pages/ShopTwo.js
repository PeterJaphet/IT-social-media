import React, { Component, Fragment, useState } from "react";
import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Rightchat from "../components/Rightchat";
import Appfooter from "../components/Appfooter";
import Popupchat from "../components/Popupchat";
import axios from "axios";
import Slider from "react-slick";
import constants from "../hooks/constant";
import { useEffect } from "react";
import imageCompression from "browser-image-compression";
import { useSelector, useDispatch } from "react-redux";
import { reset, Add } from "../features/auth/cafteria/cafteriaSlice";
import { toast } from "react-toastify";
import { useRef } from "react";

const productList = [
  {
    imageUrl: "product.png",
    name: "Kebab",
    price: "69",
  },
  {
    imageUrl: "product.png",
    name: "Chicken & Chips",
    price: "90",
  },
  {
    imageUrl: "product.png",
    name: "Cheese Burger",
    price: "100",
  },
  {
    imageUrl: "product.png",
    name: "Chicken Burger",
    price: "90",
  },
  // {
  //     imageUrl: 'product.png',
  //     name: 'Butler Stool Ladder',
  //     price:'449'
  // },
  // {
  //     imageUrl: 'product.png',
  //     name: 'Butler Stool Ladder',
  //     price:'449'
  // },
  // {
  //     imageUrl: 'product.png',
  //     name: 'Butler Stool Ladder',
  //     price:'449'
  // },
  // {
  //     imageUrl: 'product.png',
  //     name: 'Butler Stool Ladder',
  //     price:'449'
  // },
  // {
  //     imageUrl: 'product.png',
  //     name: 'Textured Sleeveless Camisole',
  //     price:'449'
  // },
  // {
  //     imageUrl: 'product.png',
  //     name: 'Adjustable Shoulder Straps',
  //     price:'449'
  // },
  // {
  //     imageUrl: 'product.png',
  //     name: 'Neck Strappy Camisole',
  //     price:'449'
  // },
  // {
  //     imageUrl: 'product.png',
  //     name: 'Scoop-Neck Strappy',
  //     price:'449'
  // },
];

function ShopTwo () {
  const API_URL = constants.API_URL;
  const [auth, setAuth] = useState(0);

  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.cafteria
  );
  const { user} = useSelector(
    (state) => state.auth
  );
  
  useEffect(()=>{
    setAuth(user.message.data.user.userRole);
}, [])

  const sliderstyle = {
    paddingRight: 20 + "!important",
  };
  const shopsettings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
  };

  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    setUserData(user.message.data.user);
    setUserId(user.message.data.user._id);
  }, []);

  const [drinks, setDrinks] = useState([]);
  const [foods, setFoods] = useState([]);
  const [extras, setExtras] = useState([]);
  const [uploadUrl, setUploadUrl] = useState(null);
  const aRef = useRef(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [check, setCheck] = useState(false);

  const handleFile = (e) => {
    if (e.target.files < 1 || !e.target.validity.valid) {
      return;
    }
    compressImageFile(e);
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
          setUploadUrl(result);
        }
      });
    } catch (error) {}
  }

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
        toast.success("added successfully");
    }
  }, [isError, isSuccess, message, dispatch]);

    useEffect(() => {
  axios.get(`${API_URL}/cafeteria/getItemCategory/${1}`).then((response) => {
    setDrinks(response.data.message.data);
  });

  axios.get(`${API_URL}/cafeteria/getItemCategory/${2}`).then((response) => {
    setFoods(response.data.message.data);
  });

  axios.get(`${API_URL}/cafeteria/getItemCategory/${3}`).then((response) => {
    setExtras(response.data.message.data);
  });

  return () => {
    dispatch(reset());
  };
    }, [dispatch,isSuccess]);

  async function handleAddItems (e){
    e.preventDefault();
    if(uploadUrl!==null){
    const cafteriaItems = { userId, name, price, category, uploadUrl };
    dispatch(Add(cafteriaItems));
    console.log(cafteriaItems);
    setName("");
    setPrice("");
    setCategory("");
    aRef.current.value=null;
    }
    else{
        toast.warning("upload url is null");
    }

  };

  return (
    <Fragment>
      <Header />
      <Leftnav />
      <Rightchat />

      <div className="main-content bg-white right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left">
            <div className="row">
              <div className="col-xl-12 col-xxl-12 col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="banner-wrapper bg-greylight overflow-hidden rounded-3 shop-slider">
                      <Slider {...shopsettings}>
                        <div className="style1 d-flex align-items-center bg-lightblue">
                          <div className="row">
                            <div
                              className="col-lg-6 ps-0 p-lg-5 pe-2 ps-5 pt-4"
                              style={sliderstyle}
                            >
                              <div className="card w-100 border-0 ps-lg-5 ps-0 bg-transparent bg-transparent-card">
                                <h4 className="font-xssss text-danger ls-3 fw-700 ms-0 mt-4 mb-3">
                                  CAFTERIA
                                </h4>
                                <h2 className="fw-300 display1-size display2-md-size lh-2 text-grey-900">
                                  Today's Special <br />{" "}
                                  <b className="fw-700"></b>
                                </h2>
                                {/* <p className="fw-500 text-grey-500 lh-26 font-xssss pe-lg-5">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Morbi nulla dolor, ornare
                                    at commodo non, feugiat non nisi. Phasellus
                                    faucibus mollis pharetra.
                                  </p> */}
                                <a
                                  href="/singleproduct"
                                  className="fw-700 text-white rounded-xl bg-primary-gradiant font-xsssss text-uppercase ls-3 lh-30 mt-0 text-center d-inline-block p-2 w150"
                                >
                                  Buy Now
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <img
                                src="assets/images/product.png"
                                alt="product"
                                className="img-fluid p-md-5 p-4"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="style1 d-flex align-items-center bg-cyan">
                          <div className="row">
                            <div
                              className="col-lg-6 ps-0 p-lg-5 pe-2 ps-5 pt-4"
                              style={sliderstyle}
                            >
                              <div className="card w-100 border-0 ps-lg-5 ps-0 bg-transparent bg-transparent-card">
                                <h4 className="font-xssss text-white ls-3 fw-700 ms-0 mt-4 mb-3">
                                  CAFTERIA
                                </h4>
                                <h2 className="fw-300 display1-size display2-md-size lh-2 text-white">
                                  New Meals Arrival <br />{" "}
                                  <b className="fw-700">Kibris Cuisines</b>
                                </h2>
                                {/* <p className="fw-500 text-grey-100 lh-26 font-xssss pe-lg-5">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Morbi nulla dolor, ornare
                                    at commodo non, feugiat non nisi. Phasellus
                                    faucibus mollis pharetra.
                                  </p> */}
                                <a
                                  href="/singleproduct"
                                  className="fw-700 text-grey-900 rounded-xl bg-white font-xsssss text-uppercase ls-3 lh-30 mt-0 text-center d-inline-block p-2 w150"
                                >
                                  Buy Now
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <img
                                src="assets/images/product.png"
                                alt="product"
                                className="img-fluid p-md-5 p-4"
                              />
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>

                  <div className="col-lg-12 mt-5 mb-0 text-center">
                    <span className="fw-700 text-white font-xssss text-uppercase ls-3 lh-32 rounded-3 mt-3 text-center d-inline-block p-2 bg-current w150">
                      Menu
                    </span>
                  </div>

                  {foods.map((value, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="card w-100 border-0 mt-4">
                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                          <a href="/singleproduct">
                            <img
                              src={value.uploadUrl}
                              alt="product"
                              className="w-100 mt-0 mb-0 p-5"
                              height="300px"
                            />
                          </a>
                        </div>
                        <div className="card-body w-100 p-0 text-center">
                          <h2 className="mt-2 mb-1">
                            <a
                              href="/singleproduct"
                              className="text-black fw-700 font-xsss lh-26"
                            >
                              {value.name}
                            </a>
                          </h2>
                          <h6 className="font-xsss fw-600 text-grey-500 ls-2">
                            {value.price}TL
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="col-lg-12 mt-5 mb-0 text-center">
                    <span className="fw-700 text-white font-xssss text-uppercase ls-3 lh-32 rounded-3 mt-3 text-center d-inline-block p-2 bg-current w150">
                      Extras
                    </span>
                  </div>

                  {extras.map((value, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="card w-100 border-0 mt-4">
                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                          <a href="/singleproduct">
                            <img
                              src={value.uploadUrl}
                              alt="product"
                              className="w-100 mt-0 mb-0 p-5"
                              height="300px"
                            />
                          </a>
                        </div>
                        <div className="card-body w-100 p-0 text-center">
                          <h2 className="mt-2 mb-1">
                            <a
                              href="/singleproduct"
                              className="text-black fw-700 font-xsss lh-26"
                            >
                              {value.name}
                            </a>
                          </h2>
                          <h6 className="font-xsss fw-600 text-grey-500 ls-2">
                            {value.price}TL
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="col-lg-12 mt-5 mb-0 text-center">
                    <span className="fw-700 text-white font-xssss text-uppercase ls-3 lh-32 rounded-3 mt-3 text-center d-inline-block p-2 bg-current w150">
                      Drinks
                    </span>
                  </div>

                  {drinks.map((value, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="card w-100 border-0 mt-4">
                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                          <a href="/singleproduct">
                            <img
                              src={value.uploadUrl}
                              alt="product"
                              className="w-100 mt-0 mb-0 p-5"
                              height="300px"
                            />
                          </a>
                        </div>
                        <div className="card-body w-100 p-0 text-center">
                          <h2 className="mt-2 mb-1">
                            <a
                              href="/singleproduct"
                              className="text-black fw-700 font-xsss lh-26"
                            >
                              {value.name}
                            </a>
                          </h2>
                          <h6 className="font-xsss fw-600 text-grey-500 ls-2">
                            {value.price}TL
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* <div className="col-lg-12 mt-3 mb-5 text-center">
                      <a
                        href="/shop2"
                        className="fw-700 text-white font-xssss text-uppercase ls-3 lh-32 rounded-3 mt-3 text-center d-inline-block p-2 bg-current w150"
                      >
                        Load More
                      </a>
                    </div> */}

                 {auth===5? <div className="container-sm|md|lg|xl p-5 my-5">
                    {/* <form> */}
                    <div className="row">
                      <div className="col">
                        <label for="Name" className="text-black fw-700">
                          Name:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Name"
                          name="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="col">
                        <label
                          for="Price"
                          className="aria-label text-black fw-700"
                        >
                          Price:
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter price"
                          name="Price"
                          required
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <div className="form-group">
                        <label className="aria-label text-black fw-700">
                          Type:<br></br>
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          required
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="" selected>
                           Select
                          </option>
                          <option value="2">MENU</option>
                          <option value="1">DRINKS</option>
                          <option value="3">EXTRAS</option>
                        </select>
                      </div>
                    </div>

                    <div className="col mt-4">
                      <label className="aria-label text-black fw-700 p-0">
                        Image:<br></br>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleFile}
                        ref={aRef}
                      />
                    </div>

                    <div className="col-sm-12 p-0 text-left mt-4">
                      <div className="form-group mb-1">
                        <button
                          className="btn-group btn-dark form-control text-center style2-input fw-600 p-0"
                          onClick={handleAddItems}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                    {/* </form> */}
                  </div>:<span></span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popupchat />
      <Appfooter />
    </Fragment>
  );
}

export default ShopTwo;
