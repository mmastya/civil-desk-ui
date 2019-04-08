import { Button } from "components/buttons/Button";
import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import s from "./Discription.css";

interface IDiscription {
  title: string;
  img: string;
  text: string;
  link?: string;
}

@withStyles(s)
@observer
export class Discription extends Component<IDiscription, never> {
  public render() {
    const { title, img, text, link } = this.props;
    return (
      <div className={s.space}>
        <div>
          <img src={img} />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
        {link ? <Button title="Открыть" type="open"/> : null}
      </div>
    );
  }
}