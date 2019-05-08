import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import s from "./Button.css";

interface IButton {
  title: string;
  type?: "primary" | "defualt" | "open" | "gold";
  onClick?(): Promise<void> | void;
}

@withStyles(s)
@observer
export class Button extends Component<IButton, never> {
  public render() {
    const { title, type, ...other } = this.props;
    let buttonType = s.default;

    if (type === "primary") {
      buttonType = s.primary;
    }

    if (type === "open") {
      buttonType = s.open;
    }

    if (type === "gold") {
      buttonType = s.gold;
    }

    return (
      <button type="button" className={`${s.button} ${buttonType}`} {...other}>
        {title}
      </button>
    );
  }
}
