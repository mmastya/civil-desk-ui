import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Button } from "../buttons/Button";
import { Picture } from "../Picture/Picture";
import s from "./Header.css";
import bell from "./image/bell.png";
import exitImage from "./image/exitImage.png";
import logo from "./image/logo.png";
import person from "./image/person.png";
import settingsImage from "./image/settingsImage.png";

interface IHeader {
  adapter: { title: string; text: string; exit: string; settings: string };
  actions: {
    onCreateNewProject?(): Promise<void>,
    onBell(): Promise<void>,
    onPerson(): Promise<void>,
    onComtrol(): Promise<void>,
    onExit(): Promise<void>
  };
}

@withStyles(s)
@observer
export class Header extends Component<IHeader, never> {
  public render() {
    const { title, text, exit, settings } = this.props.adapter;
    const { onCreateNewProject, onBell, onPerson, onComtrol, onExit } = this.props.actions;
    return (
      <div className={s.root}>
        <div className={s.logo}>
          <div>
            <Picture src={logo} />
          </div>
          <span>{title}</span>
        </div>
        <div className={s.constrols}>
          <Button title="Новый проект" type="primary" onClick={onCreateNewProject} />
          <div className={s.bell}>
            <Picture src={bell} onClick={onBell}/>
          </div>
          <div className={s.user}>
            <span>{text}</span>
            <Picture src={person} onClick={onPerson}/>
            <ul className={s.sub_menu}>
              <li>
                <div>
                  <Picture width={16} height={16} src={settingsImage} onClick={onComtrol}/>
                </div>
                <span>{settings}</span>
              </li>
              <li>
                <div>
                  <Picture width={16} height={16} src={exitImage} onClick={onExit}/>
                </div>
                <span>{exit}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
