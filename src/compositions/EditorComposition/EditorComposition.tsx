import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Picture } from "../../components/Picture/Picture";
import { IEditorComposition } from "../../interfaces/IEditorComposition";
import { Footer } from "./components/Footer/Footer";
import { EditorHeader } from "./components/Header/EditorHeader";
import { Properties } from "./components/Properties/Properties";
import s from "./EditorComposition.css";
import coordinate_system from "./image/coordinate_system.png";
import view_cube_copy from "./image/view_cube_copy.png";

@observer
@withStyles(s)
export class EditorComposition extends Component<IEditorComposition, never> {
  public render() {
    return (
      <div className={s.root}>
        <EditorHeader text="Все элементы" title="Рассчитать" word="Слои схемы" version="Нагружения" />
        <div className={s.main}>
          <div className={s.main_coordinate_system}>
            <Picture width={49} height={35} src={coordinate_system} />
          </div>
          <div className={s.main_cube}>
            <Picture width={121} height={128} src={view_cube_copy} />
            <select>
              <option>XZ, y=100</option>
            </select>
          </div>
          <div>
            <Properties title="Properties" text="Nodes (243)" />
          </div>
          <Footer text="1:1" title="X:120" number="Y:100" idea="Z:433" />
        </div>
      </div>
    );
  }
}
