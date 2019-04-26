import { browserHistory } from "store/browserHistory";
import { IRegisterComposition } from '../../interfaces/IRegisterComposition';
// tslint:disable:object-literal-sort-keys

export class RegisterAdapter implements IRegisterComposition {
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
