import { stiffnessAdapter } from "adapters/stiffness";
import { StiffnessComposition } from "compositions/StiffnessComposition/StiffnessComposition";
import { observer } from "mobx-react";
import React, { Component } from "react";

@observer
export class StiffnessPage extends Component {
  public render() {
    return <StiffnessComposition {...stiffnessAdapter} />;
  }
}
