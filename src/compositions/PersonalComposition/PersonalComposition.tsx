import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Header } from "../../components/Header/Header";
import { PopUp } from "../../components/PopUp/PopUp";
import { IPersonalComposition } from "../../interfaces/IPersonalComposition";
import { Project } from "./components/projects/Project";
import s from "./PersonalComposition.css";

@withStyles(s)
@observer
export class PersonalComposition extends Component<IPersonalComposition, never> {
  public render() {
    const {
      onCreateNewProject,
      onOpen,
      onBell,
      onPerson,
      onSettings,
      onCopy,
      onDelete,
      onComtrol,
      onExit,
      onClose,
      onCreate,
      onCloseAnyWhere,
    } = this.props.actions;
    const { projectList, isOpenCreatePopUp } = this.props.adapter;

    return (
      <div className={s.root}>
        {isOpenCreatePopUp ? (
          <PopUp adapter={{ title: "Создание нового проекта" }} actions={{ onClose, onCloseAnyWhere }}>
            <form>
              <input type="text" placeholder={"Введите название проекта"} />
              <button type="button" onClick={onCreate}>
                {"Создать"}
              </button>
            </form>
          </PopUp>
        ) : null}
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
              {projectList.map(({ id, title }) => (
                <li key={id}>
                  <Project
                    adapter={{
                      id,
                      title,
                    }}
                    actions={{ onOpen, onSettings, onCopy, onDelete }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
