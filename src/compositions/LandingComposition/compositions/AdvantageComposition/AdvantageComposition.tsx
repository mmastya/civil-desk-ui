import { Button } from "components/buttons/Button";
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
interface IAdventageComposition {}

@withStyles(s)
@observer
export class AdvantageComposition extends Component<IAdventageComposition, never> {
  public render() {
    return (
      <CenterPage>
        <div className={s.block}>
          <div>
            <h2>Основные преимущества</h2>
          </div>
          <div>
            <ul>
              <li>
                <Discription
                  title="Доступ из любого места"
                  img={first}
                  text="Идейные соображения
              высшего порядка, а также постоянный
              количественный рост и сфера нашей активности
              позволяет массового участия."
                />
              </li>
              <li>
                <Discription
                  title="Офлайн моделирование"
                  img={second}
                  text="Повседневная практика показывает,
              что постоянный количественный рост и сфера
              нашей активности требуют определения и уточнения "
                />
              </li>
              <li>
                <Discription
                  title="Встроенный сортамент"
                  img={third}
                  text="Система плоского графического
              моделирования поперечных сечений элементов конструкций"
                  link="/stiffness"
                />
              </li>
            </ul>
          </div>
        </div>
      </CenterPage>
    );
  }
}
