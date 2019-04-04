import { observer } from "mobx-react";
import React, { Component } from "react";

interface IAdventageComposition {}

@observer
export class AdvantageComposition extends Component<IAdventageComposition, never> {
  public render() {
    return <span>Advantage Composition</span>;
  }
}
