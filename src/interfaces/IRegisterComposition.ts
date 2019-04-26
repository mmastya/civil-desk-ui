import { History } from "history";

export interface IRegisterComposition {
  adapter: {
    history: History;
  };
  actions: {
    onDidMount(): Promise<void>;
  };
}
