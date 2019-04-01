import { History } from "history";

export interface IStiffnessComposition {
  adapter: {
    history: History;
  };
  actions: {
    onDidMount(): Promise<void>;
  };
}
