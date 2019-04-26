import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Button } from "../buttons/Button";
import { Picture } from "../Picture/Picture";
import s from "./Header.css";
import bell from "./image/bell.png";
import logo from "./image/logo.png";
import person from "./image/person.png";

interface IHeader {
  title: string;
  text: string;
}

@withStyles(s)
@observer
export class Header extends Component<IHeader, never> {
  public render() {
    const { title, text } = this.props;
    return (
      <div className={s.root}>
        <div>
          <Picture src={logo} />
          <span>{title}</span>
        </div>
        <div>
          <div >
            <Button title="Новый проект" type="primary" />
          </div>
          <div>
            <Picture src={bell} />
          </div>
          <div>
          <span>{text}</span>
          </div>
          <div>
            <Picture src={person} />
          </div>
        </div>
      </div>
    );
  }
}
