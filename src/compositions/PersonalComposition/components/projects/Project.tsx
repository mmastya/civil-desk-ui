import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Button } from "../../../../components/buttons/Button";
import { Picture } from "../../../../components/Picture/Picture";
import bin from "./image/bin.png";
import copy from "./image/copy.png";
import edit from "./image/edit.png";
import project from "./image/project.png";
import s from "./Project.css";
import active from "./ProjectActive.css";
import passive from "./ProjectPassive.css";

interface IProject {
  adapter: { title: string };
  actions: { onOpen?(): Promise<void>, onSettings(): Promise<void>,
    onCopy(): Promise<void>,
    onDelete(): Promise<void> };
}

@withStyles(s, active, passive)
@observer
export class Project extends Component<IProject, never> {
  public render() {
    const { title } = this.props.adapter;
    const { onOpen, onCopy, onSettings, onDelete } = this.props.actions;
    return (
      <div className={s.root}>
        <div className={passive.root}>
          <div>
            <Picture src={project} />
          </div>
          <span>{title}</span>
        </div>
        <div className={`${active.root} ${s.active}`}>
          <div>
            <div>
              <div>
                <Picture width={18} height={16} src={edit} onClick={onSettings} />
              </div>
              <div>
                <Picture width={18} height={18} src={copy} onClick={onCopy}/>
              </div>
              <div>
                <Picture width={18} height={18} src={bin} onClick={onDelete}/>
              </div>
            </div>
            <Button title="Открыть" type="gold" onClick={onOpen} />
          </div>
          <span>{title}</span>
        </div>
      </div>
    );
  }
}
