import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import s from "./FooterComposition.css";

// tslint:disable-next-line: no-empty-interface
interface IFooterComposition {
  actions: { onStartWork(): Promise<void> };
}

@withStyles(s)
@observer
export class FooterComposition extends Component<IFooterComposition, never> {
  public render() {
    const { onStartWork } = this.props.actions;
    return (
      <div className={s.root}>
        <div>
          <h3>Начните пользоваться уже сейчас!</h3>
        </div>
        <div>
          <form>
            <input type="text" name="email" placeholder="Введите E-mail" />
            <input type="password" name="password" placeholder="Придумайте Пароль" />
            <button type="button" onClick={onStartWork}>
              начать работать
            </button>
          </form>
        </div>
        <div>
          <h4>
            Нажав кнопку «Начать работать», вы соглашаетесь с <a href="">условиями использования сервиса</a>
          </h4>
        </div>
        <div>
          <h5>© 2015 «Civildesk»</h5>
        </div>
      </div>
    );
  }
}
