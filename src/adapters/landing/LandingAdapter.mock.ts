import { ILandingComposition } from "interfaces/ILandingComposition";
import { browserHistory } from "store/browserHistory";
// tslint:disable:object-literal-sort-keys

export class LandingAdapter implements ILandingComposition {
  public adapter = {
    // DEPS
    history: browserHistory,
  };

  public actions = {
    async onDidMount(): Promise<void> {
      console.log("DID_MOUNT");
    },
    async onRegister(): Promise<void> {
      console.log("ON_REGISTER");
    },
    async onSignIn(): Promise<void> {
      console.log("ON_SIGNIN");
    },
    async onIsOpen(): Promise<void> {
      console.log("ON_ISOPEN");
    },
    async onStartWork(): Promise<void> {
      console.log("ON_STARTWORK");
    },
  };
}

// tslint:enable:object-literal-sort-keys
