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
  title: string;
  text: string;
  exit: string;
  settings: string;
}

@withStyles(s)
@observer
export class Header extends Component<IHeader, never> {
  public render() {
    const { title, text, exit, settings } = this.props;
    return (
      <div className={s.root}>
        <div className={s.logo}>
          <div>
            <Picture src={logo} />
          </div>
          <span>{title}</span>
        </div>
        <div className={s.constrols}>
          <Button title="Новый проект" type="primary" />
          <div className={s.bell}>
            <Picture src={bell} />
          </div>
          <div className={s.user}>
            <span>{text}</span>
            <Picture src={person} />
            <ul className={s.sub_menu}>
              <li>
                <div>
                  <Picture width={16} height={16} src={settingsImage} />
                </div>
                <span>{settings}</span>
              </li>
              <li>
                <div>
                  <Picture width={16} height={16} src={exitImage} />
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
