import { observer } from "mobx-react";
import React, { Component } from "react";

interface IFooterComposition {}

@observer
export class FooterComposition extends Component<IFooterComposition, never> {
  public render() {
    return <span>Footer Composition</span>;
  }
}
