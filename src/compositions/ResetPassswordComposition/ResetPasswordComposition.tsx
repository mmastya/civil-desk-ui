import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { PopUp } from "../../components/PopUp/PopUp";
import { IResetPasswordComposition } from "../../interfaces/IResetPasswordComposition";
import s from "./ResetPasswordComposition.css";

@withStyles(s)
@observer
export class ResetPasswordComposition extends Component<IResetPasswordComposition, never> {
  public render() {
    return (
      <PopUp title="Сброс пароля">
        <form>
          <input type="text" placeholder={"Введите новый пароль"} />
          <input type="text" placeholder={"Введите новый пароль"} />
          <button type="button">{"Отправить"}</button>
        </form>
      </PopUp>
    );
  }
}
