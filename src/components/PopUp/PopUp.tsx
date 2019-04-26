import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import close from "./image/close.png";
import s from "./PopUp.css";

interface IPopUp {
  title: string;
}

@withStyles(s)
@observer
export class PopUp extends Component<IPopUp, never> {
  private container: Element = document.createElement("div");

  public componentDidMount() {
    console.log(this.container);
    document.body.appendChild(this.container);
  }

  public render() {
    return ReactDOM.createPortal(this.renderModal(), this.container);
  }

  public renderModal() {
    const { title } = this.props;

    return (
      <React.Fragment>
        <div className={s.mask} />
        <div className={s.fixed_modal}>
          <div className={s.modal}>
            <div>
              <span>{title}</span>
              <img src={close} alt="close" />
            </div>
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }

}
