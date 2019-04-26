import { browserHistory } from "store/browserHistory";
import { IResetPasswordComposition } from '../../interfaces/IResetPasswordComposition';
// tslint:disable:object-literal-sort-keys

export class ResetPasswordAdapter implements IResetPasswordComposition {
  public adapter = {
    // DEPS
    history: browserHistory,
  };

  public actions = {
    async onDidMount(): Promise<void> {
      console.log("DID_MOUNT");
    },
  };
}

// tslint:enable:object-literal-sort-keys
