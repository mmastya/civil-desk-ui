import { observer } from "mobx-react";
import React, { Component } from "react";

interface IOpportunitiesComposition {}

@observer
export class OpportunitiesComposition extends Component<IOpportunitiesComposition, never> {
  public render() {
    return <span>Opportunities Composition</span>;
  }
}
