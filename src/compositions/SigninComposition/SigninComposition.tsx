import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { PopUp } from "../../components/PopUp/PopUp";
import { ISigninComposition } from "../../interfaces/ISigninComposition";
import s from "./SigninComposition.css";

@withStyles(s)
@observer
export class SigninComposition extends Component<ISigninComposition, never> {
  public render() {
    return (
      <div className={s.root}>
        <PopUp title="Войти">
          <form>
            <input type="text" placeholder={"Введите логин или email"} />
            <button type="button">{"Sign in"}</button>
          </form>
        </PopUp>
      </div>
    );
  }
}
