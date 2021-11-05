import React from "react";

import "./sign-in-log-in.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignOut from "../../components/sign-out/sign-out.component";

function SignInLogIn() {
  return (
    <div className="container">
      <div className="row">
        <SignIn></SignIn>
        <SignOut></SignOut>
      </div>
    </div>
  );
}

export default SignInLogIn;
