import StyleContext from "isomorphic-style-loader/StyleContext";
import React, { Component } from "react";
import s from "./App.css";

class App extends Component<any, never> {
  public static contextType = StyleContext;

  private removeCSS: () => void;
  private htmlElement: HTMLElement | null = null;

  constructor(props, context) {
    super(props, context);

    this.removeCSS = this.context.insertCss(s);
    this.handleResize = this.handleResize.bind(this);
  }

  public componentWillUnmount() {
    this.removeCSS();
    window.removeEventListener("resize", this.handleResize);
  }

  public render() {
    return React.Children.only(this.props.children);
  }

  public handleResize() {
    if (this.htmlElement !== null) {
      const { width, height } = this.htmlElement.getBoundingClientRect();

      let baseFontSize = width / 1400;

      if (width >= 2500) {
        baseFontSize = Math.min(width / 2500, height / 960);
      } else if (width >= 2000 && width < 2500) {
        baseFontSize = Math.min(width / 2000, height / 960);
      } else if (width >= 1400 && width < 2000) {
        baseFontSize = Math.min(width / 1400, height / 960);
      } else if (width >= 1024 && width < 1400) {
        baseFontSize = Math.min(width / 1200, height / 768);
      } else {
        baseFontSize = Math.min(width / 1024, height / 768);
      }

      this.htmlElement.style.cssText = `font-size: ${baseFontSize}px;`;
    }
  }
  public componentDidMount() {
    this.htmlElement = document.getElementsByTagName("html")[0];

    window.addEventListener("resize", this.handleResize);

    this.handleResize();
  }
}

export default App;
