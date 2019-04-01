import { History } from "history";

export interface IEditorComposition {
  adapter: {
    history: History;
  };
  actions: {
    onDidMount(): Promise<void>;
  };
}
