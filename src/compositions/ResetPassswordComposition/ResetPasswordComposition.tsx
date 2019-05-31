import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { PopUp } from "../../components/PopUp/PopUp";
import s from "./ResetPasswordComposition.css";

interface IResetPasswordComposition {
  actions: {
    onClose(): Promise<void>;
    onCloseAnyWhere(): Promise<void>;
  };
}

@withStyles(s)
@observer
export class ResetPasswordComposition extends Component<IResetPasswordComposition, never> {
  public render() {
    const { onClose, onCloseAnyWhere } = this.props.actions;
    return (
      <PopUp adapter={{ title: "Сброс пароля" }} actions={{ onClose, onCloseAnyWhere }}>
        <form>
          <input type="text" placeholder={"Введите новый пароль"} />
          <input type="text" placeholder={"Введите новый пароль"} />
          <button type="button">{"Отправить"}</button>
        </form>
      </PopUp>
    );
  }
}
