import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function EditProfile({
  show,
  hideCallback,
  user,
  setAlert,
  profileData,
}) {
  const [bio, setBio] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    setFirstName(profileData.first_name);
    setLastName(profileData.last_name);
    setBio(profileData.bio);
  }, [profileData]);

  function updateProfile() {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user", user);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("bio", bio);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch("/updateProfile", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setAlert({
          variant: "success",
          message: "Profile updated successfully.",
        });
        hideCallback();
      })
      .catch((err) => {
        setAlert({ variant: "danger", message: err.message });
        hideCallback();
      });
  }

  return (
    <Modal show={show} onHide={hideCallback}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            {profileData.photo && !file ? (
              <img src={profileData.photo.asset.url} className="upload-image" alt="" />
            ) : (
              <img
                src={file ? URL.createObjectURL(file) : null}
                className="upload-image" alt=""
              />
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="First Name"
              defaultValue={profileData.first_name}
              onInput={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Last Name"
              defaultValue={profileData.last_name}
              onInput={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Bio"
              defaultValue={profileData.bio}
              onInput={(e) => setBio(e.target.value)}
            />
          </Form.Group>
          <div>
            <Button variant="primary" onClick={updateProfile}>
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

// import React, { useState } from 'react';
// import { Form, FormInput, FormGroup, FormTextarea, Button } from 'shards-react';
// import axios from 'axios';

// const EditProfile = () => {
//   const [profile, setProfile] = useState({
//     name: '',
//     bio: '',
//     profilePicture: '',
//   });

//   const handleChange = (event) => {
//     setProfile({ ...profile, [event.target.name]: event.target.value });
//   };

//   const handleFileChange = (event) => {
//     setProfile({ ...profile, profilePicture: event.target.files[0] });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Create a FormData object to store the profile picture
//     const formData = new FormData();
//     formData.append('profilePicture', profile.profilePicture);

//     // Use axios to send the FormData object and the other profile information
//     axios.post('https://example.com/api/profile', formData, {
//       params: {
//         name: profile.name,
//         bio: profile.bio,
//       },
//     })
//       .then((response) => {
//         console.log('Profile updated successfully');
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <FormGroup>
//         <label htmlFor="name">Name</label>
//         <FormInput
//           type="text"
//           id="name"
//           name="name"
//           value={profile.name}
//           onChange={handleChange}
//         />
//       </FormGroup>
//       <FormGroup>
//         <label htmlFor="bio">Bio</label>
//         <FormTextarea
//           id="bio"
//           name="bio"
//           value={profile.bio}
//           onChange={handleChange}
//         />
//       </FormGroup>
//       <FormGroup>
//         <label htmlFor="profile-picture">Profile Picture</label>
//         <FormInput
//           type="file"
//           id="profile-picture"
//           name="profilePicture"
//           onChange={handleFileChange}
//         />
//         <FormTextarea>{profile.profilePicture.name}</FormTextarea>
//       </FormGroup>
//       <Button type="submit">Update Profile</Button>
//     </Form>
//   );
// };

// export default EditProfile;
