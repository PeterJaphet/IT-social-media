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

  const [drinks, setDrinks] = useState([]);
  const [foods, setFoods] = useState([]);
  const [extras, setExtras] = useState([]);

 
   
    

   useEffect(() => {
        axios.get(
          `${API_URL}/cafeteria/getItemCategory/${1}`
        ).then((response)=>{
           setDrinks( response.data.message.data);
        });

        axios.get(
            `${API_URL}/cafeteria/getItemCategory/${2}`
          ).then((response)=>{
             setFoods( response.data.message.data);
          });

          axios.get(
            `${API_URL}/cafeteria/getItemCategory/${3}`
          ).then((response)=>{
             setExtras( response.data.message.data);
          });
  }, []);

  console.log(drinks);

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
};

export default ShopTwo;
