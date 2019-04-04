import { landingAdapter } from "adapters/landing";
import { LandingComposition } from "compositions/LandingComposition/LandingComposition";
import { observer } from "mobx-react";
import React, { Component } from "react";

@observer
export class LandingPage extends Component {
  public render() {
    return <LandingComposition {...landingAdapter} />;
  }
}

