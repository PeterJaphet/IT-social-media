import React, { Component, Fragment, useState } from "react";
import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Rightchat from "../components/Rightchat";
import Appfooter from "../components/Appfooter";
import Popupchat from "../components/Popupchat";

import constants from "../hooks/constant";
import { useEffect } from "react";
import imageCompression from "browser-image-compression";
import { useSelector, useDispatch } from "react-redux";
import { addAnnouncement } from "../features/auth/cafteria/cafteriaSlice";
import { toast } from "react-toastify";


import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const eventList = [
  {
    imageUrl: "hotel.png",
    title: "Right here Right Now -  Comedy ",
    location: "Goa, Mumbai",
    date: "22",
    month: "FEB",
  },
  {
    imageUrl: "hotel.png",
    title: "Open Mic-Stand up Comedy and Poetry",
    location: "Goa, Mumbai",
    date: "22",
    month: "FEB",
  },
  {
    imageUrl: "hotel.png",
    title: "Mohd Suhels Guide to the Galaxy",
    location: "Goa, Mumbai",
    date: "22",
    month: "FEB",
  },
  {
    imageUrl: "hotel.png",
    title: "Charlotte De Witte India Tour",
    location: "Goa, Mumbai",
    date: "31",
    month: "APR",
  },
  {
    imageUrl: "hotel.png",
    title:
      "A Stand-up Comedy Show by Rahulsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    location:
      "oooooooooooooooooooooooooooooooooooooooooooojjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjuuuuuuuuuuuuuuuuuuuuuuuuuuugggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
    date: "04",
    month: "MAR",
  },
  {
    imageUrl: "hotel.png",
    title: "Sunburn Holi Weekend 2021  ",
    location: "Goa, Mumbai",
    date: "22",
    month: "FEB",
  },
];



const Event =()=> {

    const [headline, setHeadline] = useState("");
    const [type, setType] = useState("");
    const [text, setText] = useState("");
    const [uploadUrl, setUploadUrl] = useState("");


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

      function handleSubmit(e){
        e.preventDefault();
      }
    
    return (
      <Fragment>
        <Header />
        <Leftnav />
        <Rightchat />

        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left pe-0">
              <div className="row">
                {/* <div className="col-xl-12">
                  <div className="card w-100 border-0 shadow-none rounded-xxl border-0 mb-3 overflow-hidden ">
                    <div style={{ height: "400px", width: "100%" }}>
                      <GoogleMapReact
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                      >
                        <AnyReactComponent
                          lat={59.955413}
                          lng={30.337844}
                          text="My Marker"
                        />
                      </GoogleMapReact>
                    </div>
                  </div>
                </div> */}

                {eventList.map((value, index) => (
                  <div key={index} className="col-lg-6 col-md-6 pe-2 ps-2">
                    <div className="card p-3 bg-white w-100 hover-card border-0 shadow-xss rounded-xxl border-0 mb-3 overflow-hidden ">
                      <div className="card-image w-100">
                        <img
                          src={`assets/images/${value.imageUrl}`}
                          alt="event"
                          className="w-100 rounded-3"
                        />
                      </div>
                      <div className="card-body d-block ps-0 pe-0 pb-0 ">
                        <div className="bg-greylight me-3 p-3 mb-4 border-light-md rounded-xxl theme-dark-bg">
                          <h4 className="fw-700 font-lg ls-3 text-grey-900 mb-0">
                            <span className="ls-3 d-block font-xsss text-grey-500 fw-500">
                              {value.month}
                            </span>
                            {value.date}
                          </h4>
                        </div>
                        <h2 className="fw-700 lh-3 ls-3 mb-0 font-xss">
                          {value.title}
                          <span className="d-block font-xssss fw-500 mt-2 lh-3 text-grey-500">
                            {value.location}
                          </span>
                        </h2>
                      </div>
                      <div className="card-body p-0">
                        <p className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center px-2 mt-4 mb-1 ms-0 d-inline-block rounded-xxxl">
                          By Peter
                        </p>
                        <span className="font-xsssss fw-700 ps-3 pe-3 lh-32 float-right mt-4 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1">
                          APPLY
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="container-sm|md|lg|xl p-5 my-5">
                  <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="row">
                      <div className="col">
                        <label for="Name" className="text-black fw-700">
                          Headimg:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Headline"
                          name="Heading"
                        />
                      </div>
                      <div className="col">
                        <label
                          for="Author"
                          className="aria-label text-black fw-700"
                        >
                          Author:
                        </label>
                        <input
                          type="mumber"
                          className="form-control"
                          placeholder="Enter Author"
                          name="Author"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <div className="form-group">
                        <label className="aria-label text-black fw-700 p-0">
                          Social media announcement type:<br></br>
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={type}
                          onChange={(e)=>setType(e.target.value)}
                        >
                          <option selected>Select Type</option>
                          <option value="1">Event</option>
                          <option value="2">Intership</option>
                          <option value="3">Job Post</option>
                          <option value="4">News</option>
                        </select>
                      </div>
                    </div>

                    <div className="col mt-4">
                      <label className="aria-label text-black fw-700 p-0">
                        Text :
                      </label>
                      <textarea
                        name="message"
                        className="h100 bor-0 w-100 rounded-xxl p-2  text-grey-500 fw-500 border-light-md theme-dark-bg"
                        cols="30"
                        rows="10"
                        placeholder="Enter Text "
                      ></textarea>
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
                      />
                    </div>

                    <div className="col-sm-12 text-left">
                      <div className="form-group mb-1 mt-4">
                        <button className="btn-group btn-dark form-control text-center style2-input fw-600 p-0">
                          Post
                        </button>
                      </div>
                    </div>
                  </form>
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


export default Event;
