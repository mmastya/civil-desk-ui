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
        <Header title="Civildesk" text="user_name" />
        <div className={s.page}>
          <div>
            <span>Мои проекты</span>
            <select>
              <option>по дате создания</option>
            </select>
          </div>
          <div>
            <ul>
              <li>
                <Project title="Очень длинное название ..." />
              </li>
              <li>
                <Project
                  title="Очень длинное название ..."
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
