import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import s from "./Video.css";

interface IVideo {
  src: string;
}

@withStyles(s)
@observer
export class Video extends Component<IVideo, never> {
  public render() {
    const { src } = this.props;
    return <iframe src={src} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />;
  }
}
