import { History } from "history";

export interface ISigninComposition {
  adapter: {
    history: History;
  };
  actions: {
    onDidMount(): Promise<void>;
    onSignIn(): Promise<void>;
  };
}
