import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          In an era where efficient healthcare delivery is paramount, our Healthcare Management System aims to revolutionize how healthcare providers manage patient information and services. This project was motivated by the persistent challenges faced by healthcare professionals, including inefficiencies in record-keeping and appointment management, which can hinder patient care.
          </p>
          <p>We are all in 2024!</p>
          <p>
          Designed for healthcare providers, patients, and administrators, our system offers features such as real-time patient record access, streamlined appointment scheduling, and secure billing processes. By leveraging technologies like Node.js, MongoDB, and React, we ensure a robust and user-friendly experience.

We believe that this system will not only enhance the quality of care but also reduce administrative burdens, paving the way for a more responsive healthcare environment. Our vision is to contribute to a healthcare landscape that prioritizes efficiency, accessibility, and patient-centered care.
          </p>
          <p>Feel free to adapt this structure to fit your project's unique aspects!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
