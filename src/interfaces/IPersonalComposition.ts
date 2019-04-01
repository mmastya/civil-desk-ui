import { History } from "history";

export interface IPersonalComposition {
  adapter: {
    history: History;
  };
  actions: {
    onDidMount(): Promise<void>;
  };
}
