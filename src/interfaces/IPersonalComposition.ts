import { History } from "history";

export interface IPersonalComposition {
  adapter: {
    history: History;
  };
  actions: {
    onDidMount(): Promise<void>;
    onCreateNewProject(): Promise<void>;
    onBell(): Promise<void>;
    onPerson(): Promise<void>;
    onOpen(): Promise<void>;
    onSettings(): Promise<void>;
    onCopy(): Promise<void>;
    onDelete(): Promise<void>;
    onComtrol(): Promise<void>;
    onExit(): Promise<void>;
  };
}
