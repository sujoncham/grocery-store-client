import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center align-items-center">
          <h1 className="mt-3 mb-3 text-center border-bottom">About Myself</h1>
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
            <div className="social-link mt-5">
              <Link to='/'><i class="fa fa-facebook"></i></Link>
              <Link to='/'><i class="fa fa-twitter"></i></Link>
              <Link to='/'><i class="fa fa-linkedin"></i></Link>
              <Link to='/'><i class="fa fa-google-plus"></i></Link>
              <Link to='/'><i class="fa fa-instagram"></i></Link>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
