import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Picture } from "../../../../components/Picture/Picture";
import wrench from "./image/wrench.png";
import s from "./Properties.css";

interface IProperties {
  title: string;
  text: string;
}

@observer
@withStyles(s)
export class Properties extends Component<IProperties, never> {
  public render() {
    const { text, title } = this.props;
    return (
      <div className={s.root}>
        <div className={s.root__header}>
          <div>
            <Picture width={16} height={16} src={wrench} />
          </div>
          <div>
            <span>{title}</span>
          </div>
          <div>
            <span>{text}</span>
          </div>
        </div>
        <div className={s.root__list}>
          <ul>
            <li>
              <span>General</span>
            </li>
            <li>
              <span>Geometry</span>
            </li>
            <ul>
              <li>
                <label>
                  Слой
                  <select>
                    <option />
                  </select>
                </label>
              </li>
              <li>
                <label>Checkbox
                  <input type="checkbox"/>
                </label>
              </li>
              <li>
                <label>Checkbox
                  <input type="checkbox"/>
                </label>
              </li>
              <li>
                <label>
                  Слой
                  <input />
                </label>
              </li>
            </ul>
            <li>
              <span>Loads</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
