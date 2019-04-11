import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import s from "./FooterComposition.css";
import konvert from "./image/konvert.png";

interface IFooterComposition {}

@withStyles(s)
@observer
export class FooterComposition extends Component<IFooterComposition, never> {
  public render() {
    return (
      <div className={s.root}>
        <div>
          <h3>Начните пользоваться уже сейчас!</h3>
        </div>
        <div>
          <form>
            <input type="text" name="email" placeholder="Введите E-mail" />
            <input type="password" name="password" placeholder="Придумайте Пароль" />
            <button type="button"> начать работать</button>
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
