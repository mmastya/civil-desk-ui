import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import s from "./Picture.css";

interface IPicture {
  src: string;
}

@withStyles(s)
@observer
export class Picture extends Component<IPicture, never> {
  private imageRef: React.RefObject<HTMLImageElement>;

  constructor(props: IPicture, context: any) {
    super(props, context);
    this.imageRef = React.createRef();
  }

  public componentDidMount() {
    if (this.imageRef.current) {
      this.imageRef.current.onload = (event: Event) => {
        if (event.target) {
          const img: HTMLImageElement = event.target as HTMLImageElement;
          const { width, height } = img.getBoundingClientRect();

          img.style.width = `${width}rem`;
          img.style.height = `${height}rem`;
          img.style.visibility = `visible`;
        }
      };
    }
  }

  public render() {
    const { src } = this.props;

    return <img src={src} ref={this.imageRef} style={{ visibility: "hidden" }} />;
  }
}
