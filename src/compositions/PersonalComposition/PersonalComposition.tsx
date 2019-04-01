import { IPersonalComposition } from "interfaces/IPersonalComposition";
import { observer } from "mobx-react";
import React, { Component } from "react";

@observer
export class PersonalComposition extends Component<IPersonalComposition, never> {
  public render() {
    const { adapter, actions } = this.props;

    console.log({ adapter, actions });

    return <span>Personal Composition</span>;
  }
}
