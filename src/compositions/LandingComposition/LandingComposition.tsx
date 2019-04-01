import { ILandingComposition } from "interfaces/ILandingComposition";
import { observer } from "mobx-react";
import React, { Component } from "react";

@observer
export class LandingComposition extends Component<ILandingComposition, never> {
  public render() {
    const { adapter, actions } = this.props;

    console.log({ adapter, actions });

    return <span>Landing Composition</span>;
  }
}
