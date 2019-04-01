import { IStiffnessComposition } from "interfaces/IStiffnessComposition";
import { browserHistory } from "store/browserHistory";
// tslint:disable:object-literal-sort-keys

export class StiffnessAdapter implements IStiffnessComposition {
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
