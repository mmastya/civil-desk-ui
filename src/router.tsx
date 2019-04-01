import React from "react";
import { browserHistory } from "store/browserHistory";
import { EditorPage } from "./pages/EditorPage/EditorPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { PersonalPage } from "./pages/PersonalPage/PersonalPage";
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

    default: {
      browserHistory.replace("/", null);
      return null;
    }
  }
}
