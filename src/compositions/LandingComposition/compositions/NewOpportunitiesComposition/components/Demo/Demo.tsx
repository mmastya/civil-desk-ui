import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Video } from "../Video/Video";
import s from "./Demo.css";

interface IDemo {
  title: string;
  text: string;
  src: string;
}

@withStyles(s)
@observer
export class Demo extends Component<IDemo, never> {
  public render() {
    const { title, text, src } = this.props;
    return (
      <div className={s.root}>
        <Video src="https://www.youtube.com/embed/Vecpln_VbFI" />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    );
  }
}
