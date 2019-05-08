import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Header } from "../../components/Header/Header";
import { Project } from "./components/projects/Project";
import s from "./PersonalComposition.css";

interface IPersonalComposition {
  actions: {
    onCreateNewProject(): Promise<void>;
    onOpen(): Promise<void>;
    onBell(): Promise<void>;
    onPerson(): Promise<void>;
    onSettings(): Promise<void>;
    onCopy(): Promise<void>;
    onDelete(): Promise<void>;
    onComtrol(): Promise<void>;
    onExit(): Promise<void>;
  };
}

@withStyles(s)
@observer
export class PersonalComposition extends Component<IPersonalComposition, never> {
  public render() {
    const { onCreateNewProject, onOpen, onBell, onPerson, onSettings, onCopy, onDelete, onComtrol, onExit } = this.props.actions;
    return (
      <div className={s.root}>
        <Header
          adapter={{ title: "Civildesk", text: "user_name", exit: "Выйти", settings: "Настройки" }}
          actions={{ onCreateNewProject, onBell, onPerson, onComtrol, onExit }}
        />
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
                  adapter={{
                    title: `Очень длинное название
                                металлической конструкции`,
                  }}
                  actions={{ onOpen, onSettings, onCopy, onDelete }}
                />
              </li>
              <li>
                <Project
                  adapter={{
                    title: `Очень длинное название
                  металлической конструкции`,
                  }}
                  actions={{ onOpen, onSettings, onCopy, onDelete }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
