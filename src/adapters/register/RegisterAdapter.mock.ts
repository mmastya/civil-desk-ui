import { browserHistory } from "store/browserHistory";
import { IRegisterComposition } from "../../interfaces/IRegisterComposition";
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
    async onCreate(): Promise<void> {
      console.log("ON_CREATE");
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
