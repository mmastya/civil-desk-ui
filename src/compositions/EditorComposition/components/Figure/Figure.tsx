import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import s from "./Figure.css";

interface IFigure {}

@observer
@withStyles(s)
export class Figure extends Component<IFigure, never> {
  public render() {
    return (
      <div>

      </div>
    );
  }
}
