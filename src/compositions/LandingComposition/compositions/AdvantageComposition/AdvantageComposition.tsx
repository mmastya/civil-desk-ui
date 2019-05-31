import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { CenterPage } from "../../../../components/center/CenterPage";
import s from "./AdvantageComposition.css";
import { Discription } from "./components/discription/Discription";
import first from "./images/first.png";
import second from "./images/second.png";
import third from "./images/third.png";

// tslint:disable-next-line: no-empty-interface
interface IAdventageComposition {
  actions: {
    onIsOpen(): Promise<void>;
  };
}

@withStyles(s)
@observer
export class AdvantageComposition extends Component<IAdventageComposition, never> {
  public render() {
    const { onIsOpen } = this.props.actions;
    return (
      <CenterPage>
        <div className={s.root}>
          <div>
            <h2>Основные преимущества</h2>
          </div>
          <div>
            <ul>
              <li>
                <Discription
                  adapter={{
                    title: "Доступ из любого места",
                    img: first,
                    text: `Идейные соображения
                        высшего порядка, а также постоянный
                        количественный рост и сфера нашей активности
                        позволяет массового участия.`,
                  }}
                  actions={{}}
                />
              </li>
              <li>
                <Discription
                  adapter={{
                    title: "Офлайн моделирование",
                    img: second,
                    text: `Повседневная практика показывает,
              что постоянный количественный рост и сфера
              нашей активности требуют определения и уточнения`,
                  }}
                  actions={{}}
                />
              </li>
              <li>
                <Discription
                  adapter={{
                    title: "Встроенный сортамент",
                    img: third,
                    text: `Система плоского графического
              моделирования поперечных сечений элементов конструкций`,
                    link: "/stiffness",
                  }}
                  actions={{
                    onIsOpen,
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </CenterPage>
    );
  }
}
