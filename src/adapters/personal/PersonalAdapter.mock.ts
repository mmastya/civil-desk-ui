import { IPersonalComposition } from "interfaces/IPersonalComposition";
import { browserHistory } from "store/browserHistory";
// tslint:disable:object-literal-sort-keys

export class PersonalAdapter implements IPersonalComposition {
  public adapter = {
    // DEPS
    history: browserHistory,
    isOpenCreatePopUp: false,
    projectList: [
      {
        id: "project_id_1",
        title: "Заголовок проекта 1",
      },
      {
        id: "project_id_2",
        title: "Заголовок проекта 2",
      },
      {
        id: "project_id_3",
        title: "Заголовок проекта 3",
      },
      {
        id: "project_id_4",
        title: "Заголовок проекта 4",
      },
      {
        id: "project_id_5",
        title: "Заголовок проекта 5",
      },
      {
        id: "project_id_6",
        title: "Заголовок проекта 6",
      },
    ],
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
    async onOpen(id: string): Promise<void> {
      console.log("ON_OPEN", id);
    },
    async onSettings(id: string): Promise<void> {
      console.log("ON_SETTINGS", id);
    },
    async onCopy(id: string): Promise<void> {
      console.log("ON_COPY", id);
    },
    async onDelete(id: string): Promise<void> {
      console.log("ON_DELETE", id);
    },
    async onComtrol(): Promise<void> {
      console.log("ON_CONTROL");
    },
    async onExit(): Promise<void> {
      console.log("ON_EXIT");
    },
    async onClose(): Promise<void> {
      console.log("ON_CLOSE");
    },
    async onCreate(): Promise<void> {
      console.log("ON_CREATE");
    },
    async onCloseAnyWhere(): Promise<void> {
      console.log("ON_CLOSE_ANYWHERE");
    },
  };
}

// tslint:enable:object-literal-sort-keys
