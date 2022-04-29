import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import Loading from "../SharedPart/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
  let from = location?.state?.from.pathName || '/';
  
  let errorElement;
  if (error || gitError) {
    errorElement = <p className="text-danger">Error: {error?.message} {gitError?.message}</p>;
  }

  if (loading || gitLoading) {
    return <Loading></Loading>
  }

  if (user || gitUser) {
    navigate(from, {replace:true});
  }

  return (
    <div className="social-login">
      <div className="d-flex align-items-center">
        <div className="lineDiv"></div> <span className="p-2">or</span>{" "}
        <div className="lineDiv"></div>
      </div>
      {errorElement}
      {loading}
      {gitLoading}

      <div className="mt-5 mb-4 w-50 mx-auto">
        <div className="google-sign mb-4">
        <button onClick={() => signInWithGoogle()} className="btn btn-primary w-100 mx-auto">
         <img className="social-img" src="https://i.ibb.co/TL9tBnZ/google.png" alt="" /> Continue with Google
        </button>
        </div>
        <div className="git-sign">
        <button onClick={() => signInWithGithub()} className="btn btn-primary w-100 mx-auto">
         <img className="social-img" src="https://i.ibb.co/qyBQKdP/github.png" alt="" /> Continue with Github
        </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
