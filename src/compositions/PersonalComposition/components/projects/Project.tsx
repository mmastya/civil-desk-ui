import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Picture } from "../../../../components/Picture/Picture";
import project from "./image/project.png";
import s from "./Project.css";

interface IProject {
  title: string;
}

@withStyles(s)
@observer
export class Project extends Component<IProject, never> {
  public render() {
    const { title } = this.props;
    return (
      <div className={s.root}>
        <div>
          <Picture src={project} />
        </div>
        <div>
          <span>{title}</span>
        </div>
      </div>
    );
  }
}
