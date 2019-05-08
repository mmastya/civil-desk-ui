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
    async onCreateNewProject(): Promise<void> {
      console.log("ON_CREATWNEWPROJECT");
    },
    async onBell(): Promise<void> {
      console.log("ON_BELL");
    },
    async onPerson(): Promise<void> {
      console.log("ON_PERSON");
    },
    async onOpen(): Promise<void> {
      console.log("ON_OPEN");
    },
    async onSettings(): Promise<void> {
      console.log("ON_SETTINGS");
    },
    async onCopy(): Promise<void> {
      console.log("ON_COPY");
    },
    async onDelete(): Promise<void> {
      console.log("ON_DELETE");
    },
    async onComtrol(): Promise<void> {
      console.log("ON_CONTROL");
    },
    async onExit(): Promise<void> {
      console.log("ON_EXIT");
    },
  };
}

// tslint:enable:object-literal-sort-keys
