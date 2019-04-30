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
  title: string;
}

@withStyles(s, active, passive)
@observer
export class Project extends Component<IProject, never> {
  public render() {
    const { title } = this.props;
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
                <Picture width={18} height={16} src={edit} />
              </div>
              <div>
                <Picture width={18} height={18} src={copy} />
              </div>
              <div>
                <Picture width={18} height={18} src={bin} />
              </div>
            </div>
            <Button title="Открыть" type="gold" />
          </div>
          <span>{title}</span>
        </div>
      </div>
    );
  }
}
