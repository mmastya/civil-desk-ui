import { History } from "history";
import { IProject } from "./data/IProject";

export interface IPersonalComposition {
  adapter: {
    history: History;
    projectList: IProject[];
    isOpenCreatePopUp: boolean;
  };
  actions: {
    onDidMount(): Promise<void>;
    onCreateNewProject(): Promise<void>;
    onBell(): Promise<void>;
    onPerson(): Promise<void>;
    onComtrol(): Promise<void>;
    onExit(): Promise<void>;
    onClose(): Promise<void>;
    onCreate(): Promise<void>;
    onCloseAnyWhere(): Promise<void>;
    onOpen(id: string): Promise<void>;
    onSettings(id: string): Promise<void>;
    onCopy(id: string): Promise<void>;
    onDelete(id: string): Promise<void>;
  };
}
