import React from "react";
import SignIn from "../../components/SignIn/sign-in";
import SignUp from "../../components/sign-up/SignUp";
import "./sign-in-and-sign-up.scss";

const SignInUp = () => {
  return (
    <div className="sign-in-and-sign-up ">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default SignInUp;
