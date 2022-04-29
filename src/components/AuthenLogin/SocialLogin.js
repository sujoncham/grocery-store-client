import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
  
  let errorElement;
  if (error || gitError) {
    errorElement = <p className="text-danger">Error: {error?.message} {gitError?.message}</p>;
  }
  if (loading || gitLoading) {
    return <p>Loading...</p>;
  }
  if (user || gitUser) {
    navigate("/");
  }

  return (
    <div className="social-login">
      
      <div className="d-flex align-items-center">
        <div className="lineDiv"></div> <span className="p-2">or</span>{" "}
        <div className="lineDiv"></div>
      </div>
      {errorElement}

      <div className="mt-5 mb-4 w-50 mx-auto">
        
        <div className="google-sign mb-4">
        <button onClick={() => signInWithGoogle()} className="btn btn-primary">
          Continue with Google
        </button>
        </div>
        <div className="git-sign">
        <button onClick={() => signInWithGithub()} className="btn btn-primary">
          Continue with Github
        </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
