import { personalAdapter } from "adapters/personal";
import { PersonalComposition } from "compositions/PersonalComposition/PersonalComposition";
import { observer } from "mobx-react";
import React, { Component } from "react";

@observer
export class PersonalPage extends Component {
  public render() {
    return <PersonalComposition {...personalAdapter} />;
  }
}
