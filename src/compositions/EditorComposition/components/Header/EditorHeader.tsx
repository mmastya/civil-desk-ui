import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Picture } from "../../../../components/Picture/Picture";
import s from "./EditorHeader.css";
import folder from "./image/folder.png";
import left_arrow from "./image/left_arrow.png";
import menu from "./image/menu.png";
import right_arrow from "./image/right_arrow.png";

interface IEditorHeader {
  text: string;
  title: string;
  word: string;
  version: string;
}

@observer
@withStyles(s)
export class EditorHeader extends Component<IEditorHeader, never> {
  public render() {
    const { text, title, word, version } = this.props;
    return (
      <div className={s.root}>
        <div className={s.menu}>
          <ul>
            <li>
              <Picture width={16} height={12} src={menu} />
            </li>
            <li>
              <Picture width={16} height={14} src={folder} />
            </li>
            <li>
              <Picture width={14} height={11} src={left_arrow} />
            </li>
            <li>
              <Picture width={14} height={11} src={right_arrow} />
            </li>
          </ul>
          <select name="Все элементы">
            <option>{text}</option>
          </select>
        </div>
        <div className={s.settings}>
          <button>
            {title}
          </button>
          <ul>
            <li>
              <button>{word}</button>
            </li>
            <li>
              <button>{version}</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
