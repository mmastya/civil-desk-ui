import { browserHistory } from "store/browserHistory";
import { ISigninComposition } from "../../interfaces/ISigninComposition";
// tslint:disable:object-literal-sort-keys

export class SigninAdapter implements ISigninComposition {
  public adapter = {
    // DEPS
    history: browserHistory,
  };

  public actions = {
    async onDidMount(): Promise<void> {
      console.log("DID_MOUNT");
    },
    async onSignIn(): Promise<void> {
      console.log("ON_SIGNIN");
    },
    async onClose(): Promise<void> {
      console.log("ON_CLOSE");
    },
    async onCloseAnyWhere(): Promise<void> {
      console.log("ON_CLOSE_ANYWHERE");
    },
  };
}

// tslint:enable:object-literal-sort-keys
