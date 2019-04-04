import { observer } from "mobx-react";
import React, { Component } from "react";

interface INewOpportunitiesComposition {}

@observer
export class NewOpportunitiesComposition extends Component<INewOpportunitiesComposition, never> {
  public render() {
    return <span>NewOpportunities Composition</span>;
  }
}
