import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import s from "./CenterPage.css";

interface ICenterPage {}

@withStyles(s)
@observer
export class CenterPage extends Component<ICenterPage, never> {
  public render() {
    return <div className={s.root}>{this.props.children}</div>;
  }
}
