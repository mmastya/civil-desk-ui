import { observer } from "mobx-react";
import React, { Component } from "react";
import { resetpasswordAdapter } from "../../adapters/resetpassword";
import { ResetPasswordComposition } from "../../compositions/ResetPassswordComposition/ResetPasswordComposition";

@observer
export class ResetPasswordPage extends Component {
  public render() {
    return <ResetPasswordComposition {...resetpasswordAdapter} />;
  }
}
