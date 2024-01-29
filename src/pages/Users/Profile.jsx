import React, { useState, useRef } from 'react';
import "./Profile.css";
import pic from "./pic.png";

export default function Profile() {
  const [selectedImage, setSelectedImage] = useState("https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleButtonClick = () => {
    // Trigger file input click when button is clicked
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="main_box">
        <h1>Profile Update</h1>
        <div className="box">
          <div className="picture">
            <img src={selectedImage} alt="profile" width="200px" height="200px" />
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              id="contained-button-file"
              onChange={handleImageChange}
              ref={fileInputRef}
            />
            <label htmlFor="contained-button-file">
              <button type="button" onClick={handleButtonClick}><img src={pic} alt="" /></button>
            </label>
          </div>
          <hr />
          <div className="input-fields">
            <form action="">
              <input type="text" placeholder='Name' required />
              <input type="text" placeholder='Last Name' required /> <br />
              <input type="email" placeholder='Email' required />
              <input type="password" placeholder='Password' required />
              <br />
              <button type='submit'>Update Profile</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
