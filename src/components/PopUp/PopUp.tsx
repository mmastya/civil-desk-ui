import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import close from "./image/close.png";
import s from "./PopUp.css";

interface IPopUp {
  adapter: {
    title: string;
  };
  actions: {
    onClose(): Promise<void>;
    onCloseAnyWhere(): Promise<void>;
  };
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
    const { title } = this.props.adapter;
    const { onClose, onCloseAnyWhere } = this.props.actions;

    return (
      <React.Fragment>
        <div className={s.mask} />
        <div className={s.fixed_modal} onClick={onCloseAnyWhere}>
          <div className={s.modal}>
            <div>
              <span>{title}</span>
              <img src={close} alt="close" onClick={onClose}/>
            </div>
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
