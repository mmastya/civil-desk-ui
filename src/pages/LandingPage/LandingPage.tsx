import { landingAdapter } from "adapters/landing";
import { LandingComposition } from "compositions/LandingComposition/LandingComposition";
import { observer } from "mobx-react";
import React, { Component } from "react";

@observer
export class LandingPage extends Component {
  private htmlElement: HTMLElement | null = null;

  constructor(props, context) {
    super(props, context);

    this.handleResize = this.handleResize.bind(this);
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
        baseFontSize = Math.min(width / 1024, height / 768);
      } else {
        baseFontSize = Math.min(width / 375, height / 667);
      }

      this.htmlElement.style.cssText = `font-size: ${baseFontSize}px;`;
    }
  }

  public componentDidMount() {
    this.htmlElement = document.getElementsByTagName("html")[0];

    window.addEventListener("resize", this.handleResize);

    this.handleResize();
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  public render() {
    return <LandingComposition {...landingAdapter} />;
  }
}
