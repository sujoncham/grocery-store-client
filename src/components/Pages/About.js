import React from "react";

const About = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center align-items-center">
          <h1 className="mt-3 mb-3 text-center border-bottom">My Profile</h1>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <img className="w-75" src="https://i.ibb.co/KGBzbkH/me.png" alt="" />
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          
            <h1>Sujon Chambugong</h1>
            <p>
              Hi, I am Sujon Chambugong. I am a student of Programming Hero
              Institution, a platform online base web development course. My
              purpose was to learn javascript. But now, my dreams are looking
              for more something by learning React Js. Thank you so much to
              start my new journey in life.
            </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
