import { Button } from "components/buttons/Button";
import { Picture } from "components/Picture/Picture";
import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import s from "./Discription.css";

interface IDiscription {
  adapter: {
    title: string;
    img: string;
    text: string;
    link?: string;
  };
  actions: {
    onIsOpen?(): Promise<void>;
  };
}

@withStyles(s)
@observer
export class Discription extends Component<IDiscription, never> {
  public render() {
    const { title, img, text, link } = this.props.adapter;
    const { onIsOpen } = this.props.actions;
    return (
      <div className={s.space}>
        <div>
          <Picture src={img} />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
        {link ? (
          <div className={s.button_open}>
            <Button title="Открыть" type="open" onClick={onIsOpen} />
          </div>
        ) : null}
      </div>
    );
  }
}
