import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { PopUp } from "../../components/PopUp/PopUp";
import s from "./RegisterComposition.css";

interface IRegisterComposition {
  actions: {
    onCreate(): Promise<void>;
    onClose(): Promise<void>;
    onCloseAnyWhere(): Promise<void>;
  };
}

@withStyles(s)
@observer
export class RegisterComposition extends Component<IRegisterComposition, never> {
  public render() {
    const { onCreate, onClose, onCloseAnyWhere } = this.props.actions;
    return (
      <div className={s.root}>
        <PopUp adapter={{title:"Регистрация"}} actions={{onClose, onCloseAnyWhere}}>
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
