import { History } from "history";

export interface IResetPasswordComposition {
  adapter: {
    history: History;
  };
  actions: {
    onDidMount(): Promise<void>;
    onClose(): Promise<void>;
    onCloseAnyWhere(): Promise<void>;
  };
}
