import { observer } from "mobx-react";
import React, { Component } from "react";
import { RegisterComposition } from '../../compositions/RegisterComposition/RegisterComposition';
import { registerAdapter } from '../../adapters/register';

@observer
export class RegisterPage extends Component {
  public render() {
    return <RegisterComposition {...registerAdapter}/>;
  }
}
