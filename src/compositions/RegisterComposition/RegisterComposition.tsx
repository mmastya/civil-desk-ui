import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { PopUp } from "../../components/PopUp/PopUp";
import { IRegisterComposition } from "../../interfaces/IRegisterComposition";
import s from "./RegisterComposition.css";

@withStyles(s)
@observer
export class RegisterComposition extends Component<IRegisterComposition, never> {
  public render() {
    return (
      <div className={s.root}>
        <PopUp title="Регистрация">
          <form>
            <input type="text" placeholder={"Введите логин"} />
            <input type="text" placeholder={"Введите пароль"} />
            <button type="button">{"Создать"}</button>
          </form>
        </PopUp>
      </div>
    );
  }
}
