import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Picture } from "../../../../../../components/Picture/Picture";
import s from "./Items.css";

interface IItems {
  title: string;
  img: string;
  text: string;
  turn?: boolean;
}

@withStyles(s)
@observer
export class Items extends Component<IItems, never> {
  public render() {
    const { title, img, text, turn } = this.props;
    return (
      <div className={`${s.root} ${turn ? s.revers : ""}`}>
        <div>
          <Picture src={img} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}
