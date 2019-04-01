import { IStiffnessComposition } from "interfaces/IStiffnessComposition";
import { observer } from "mobx-react";
import React, { Component } from "react";

@observer
export class StiffnessComposition extends Component<IStiffnessComposition, never> {
  public render() {
    const { adapter, actions } = this.props;

    console.log({ adapter, actions });

    return <span>Stiffness Composition</span>;
  }
}
