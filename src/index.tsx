import StyleContext from "isomorphic-style-loader/StyleContext";
import App from "pages/App/App";
import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "store/browserHistory";

let container: Element | null;
const insertCss = (...styles: any[]) => {
  const removeCss = styles.map((style_item: any) => style_item._insertCss());

  return () => removeCss.forEach((dispose) => dispose());
};

const render = (Root) => {
  const { router } = require("./router");
  const Page = router();

  if (Page) {
    ReactDOM.render(
      <StyleContext.Provider value={{ insertCss }}>
        <Root>{Page}</Root>
      </StyleContext.Provider>,
      container,
    );
  }
};

browserHistory.listen(() => {
  render(App);
});

document.addEventListener("DOMContentLoaded", () => {
  container = document.createElement("div");
  document.body.appendChild(container);

  render(App);
});

declare var module: any;

if (module.hot) {
  module.hot.accept("./router", () => {
    render(App);
  });
}

declare var process: { env: { NODE_ENV: string } };

if (process.env.NODE_ENV === "production") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
}
