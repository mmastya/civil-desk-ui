import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Picture } from "../../../../components/Picture/Picture";
import s from "./Footer.css";
import loupe from "./image/loupe.png";
import measure from "./image/measure.png";
import rotate from "./image/rotate.png";
import size from "./image/size.png";
import switch_button from "./image/switch_button.png";
import view_angel from "./image/view_angle.png";

interface IFooter {
  text: string;
  title: string;
  number: string;
  idea: string;
}

@observer
@withStyles(s)
export class Footer extends Component<IFooter, never> {
  public render() {
    const { text, title, number, idea } = this.props;
    return (
      <div className={s.tools}>
        <div className={s.first}>
          <div>
            <Picture width={16} height={13} src={size} />
          </div>
          <span>{text}</span>
        </div>
        <div className={s.second}>
          <ul className={s.second_coordinates}>
            <li>
              <span>{title}</span>
            </li>
            <li>
              <span>{number}</span>
            </li>
            <li>
              <span>{idea}</span>
            </li>
          </ul>
          <ul className={s.second_tools}>
            <li>
              <Picture width={24} height={12} src={switch_button} />
            </li>
            <li>
              <Picture width={18} height={16} src={rotate} />
            </li>
            <li>
              <Picture width={16} height={16} src={loupe} />
            </li>
            <li>
              <Picture width={16} height={16} src={measure} />
            </li>
            <li>
              <Picture width={15} height={15} src={view_angel} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
