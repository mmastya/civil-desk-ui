import { History } from "history";

export interface ILandingComposition {
  adapter: {
    history: History;
  };
  actions: {
    onDidMount(): Promise<void>;
    onRegister(): Promise<void>;
    onSignIn(): Promise<void>;
    onIsOpen(): Promise<void>;
    onStartWork(): Promise<void>;
  };
}
