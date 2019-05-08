import { Button } from "components/buttons/Button";
import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { Picture } from "../../../../components/Picture/Picture";
import s from "./HeaderComposition.css";
import logo from "./images/logo.png";
import mouse from "./images/mouse.png";

// tslint:disable-next-line: no-empty-interface
interface IHeaderComposition {
  actions: {
    onRegister(): Promise<void>;
    onSignIn(): Promise<void>;
  };
}

@withStyles(s)
@observer
export class HeaderComposition extends Component<IHeaderComposition, never> {
  public render() {
    const { onRegister, onSignIn } = this.props.actions;
    return (
      <div className={s.root}>
        <div>
          <div>
            <Picture src={logo} />
            <span>CivilDesk</span>
          </div>
          <div>
            <Button title="Регистрация" type="primary" onClick={onRegister}/>
            <Button title="Войти" onClick={onSignIn}/>
          </div>
        </div>
        <div>
          <h1>
            Статический рассчет стержневых систем
            <br />
            методом конечных элементов
          </h1>
          <p>Развитие структуры играет важную роль в формировании</p>
        </div>
        <Picture src={mouse} />
      </div>
    );
  }
}
