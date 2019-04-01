import { IPersonalComposition } from "interfaces/IPersonalComposition";
import { browserHistory } from "store/browserHistory";
// tslint:disable:object-literal-sort-keys

export class PersonalAdapter implements IPersonalComposition {
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
