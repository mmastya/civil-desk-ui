import { observer } from "mobx-react";
import React, { Component } from "react";
import { SigninComposition } from "../../compositions/SigninComposition/SigninComposition";
import { signinAdapter } from '../../adapters/signin';

@observer
export class SigninPage extends Component {
  public render() {
    return <SigninComposition {...signinAdapter}/>;
  }
}
