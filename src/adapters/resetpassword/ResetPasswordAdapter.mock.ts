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
    async onClose(): Promise<void> {
      console.log("ON_CLOSE");
    },
    async onCloseAnyWhere(): Promise<void> {
      console.log("ON_CLOSE_ANYWHERE");
    },
  };
}

// tslint:enable:object-literal-sort-keys
