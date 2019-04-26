import React from "react";
import { browserHistory } from "store/browserHistory";
import { EditorPage } from "./pages/EditorPage/EditorPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { PersonalPage } from "./pages/PersonalPage/PersonalPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage/ResetPasswordPage";
import { SigninPage } from "./pages/SigninPage/SigninPage";
import { StiffnessPage } from "./pages/StiffnessPage/StiffnessPage";

export function router() {
  const pathname: string = browserHistory.location.pathname;

  switch (pathname) {
    case "/":
      return <LandingPage />;
    case "/personal":
      return <PersonalPage />;
    case "/stiffness":
      return <StiffnessPage />;
    case "/editor":
      return <EditorPage />;
    case "/register":
      return <RegisterPage />;
    case "/signin":
      return <SigninPage />;
    case "/resetpassword":
      return <ResetPasswordPage />;
    default: {
      browserHistory.replace("/", null);
      return null;
    }
  }
}
