import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { PopUp } from "../../components/PopUp/PopUp";
import s from "./SigninComposition.css";

interface ISigninComposition {
  actions: {
    onSignIn(): Promise<void>;
    onClose(): Promise<void>;
    onCloseAnyWhere(): Promise<void>;
  };
}

@withStyles(s)
@observer
export class SigninComposition extends Component<ISigninComposition, never> {
  public render() {
    const { onSignIn,onClose,onCloseAnyWhere } = this.props.actions;

    return (
      <div className={s.root}>
        <PopUp adapter={{title:"Вход"}} actions={{onClose, onCloseAnyWhere}}>
          <form>
            <input type="text" placeholder={"Введите логин или email"} />
            <button type="button" onClick={onSignIn}>
              {"Войти"}
            </button>
          </form>
        </PopUp>
      </div>
    );
  }
}
