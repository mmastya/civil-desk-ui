import { IPersonalComposition } from "interfaces/IPersonalComposition";
import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Header } from "../../components/Header/Header";
import { Project } from "./components/projects/Project";
import s from "./PersonalComposition.css";

@withStyles(s)
@observer
export class PersonalComposition extends Component<IPersonalComposition, never> {
  public render() {
    return (
      <div className={s.root}>
        <Header title="Civildesk" text="user_name" exit="Выйти" settings="Настройки" />
        <div className={s.page}>
          Настройки
          <div>
            <span>Мои проекты</span>
            <div>
              <select>
                <option>по дате создания</option>
              </select>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <Project
                  title="Очень длинное название
                                металлической конструкции"
                />
              </li>
              <li>
                <Project
                  title="Очень длинное название
                                металлической конструкции"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
