import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { PopUp } from "../../components/PopUp/PopUp";
import s from "./RegisterComposition.css";

interface IRegisterComposition {
  actions: {
    onCreate(): Promise<void>;
  };
}

@withStyles(s)
@observer
export class RegisterComposition extends Component<IRegisterComposition, never> {
  public render() {
    const { onCreate } = this.props.actions;
    return (
      <div className={s.root}>
        <PopUp title="Регистрация">
          <form>
            <input type="text" placeholder={"Введите логин"} />
            <input type="text" placeholder={"Введите пароль"} />
            <button type="button" onClick={onCreate}>
              {"Создать"}{" "}
            </button>
          </form>
        </PopUp>
      </div>
    );
  }
}
