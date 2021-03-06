import { ILandingComposition } from "interfaces/ILandingComposition";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { AdvantageComposition } from "./compositions/AdvantageComposition/AdvantageComposition";
import { FooterComposition } from "./compositions/FooterComposition/FooterComposition";
import { HeaderComposition } from "./compositions/HeaderComposition/HeaderComposition";
import { NewOpportunitiesComposition } from "./compositions/NewOpportunitiesComposition/NewOpportunitiesComposition";
import { OpportunitiesComposition } from "./compositions/OpportunitiesComposition/OpportunitiesComposition";

@observer
export class LandingComposition extends Component<ILandingComposition, never> {
  public render() {
    return (
      <div>
        <HeaderComposition key="0" {...this.props} />
        <AdvantageComposition key="1" {...this.props} />
        <OpportunitiesComposition key="2" />
        <NewOpportunitiesComposition key="3" />
        <FooterComposition key="4" {...this.props} />
      </div>
    );
  }
}
