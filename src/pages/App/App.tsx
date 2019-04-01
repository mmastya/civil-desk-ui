import StyleContext from "isomorphic-style-loader/StyleContext";
import "normalize.css";
import React, { Component } from "react";
import s from "./App.css";

class App extends Component<any, never> {
  public static contextType = StyleContext;

  private removeCSS: () => void;

  constructor(props, context) {
    super(props, context);

    this.removeCSS = this.context.insertCss(s);
  }

  public componentWillUnmount() {
    this.removeCSS();
  }

  public render() {
    return React.Children.only(this.props.children);
  }
}

export default App;
