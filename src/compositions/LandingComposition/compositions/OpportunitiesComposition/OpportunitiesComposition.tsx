import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { CenterPage } from "../../../../components/center/CenterPage";
import { Items } from "./components/Items/Items";
import first_1 from "./images/first_1.png";
import second_2 from "./images/second_2.png";
import third_3 from "./images/third_3.png";
import s from "./OpportunitiesComposition.css";

// tslint:disable-next-line: no-empty-interface
interface IOpportunitiesComposition {}

@withStyles(s)
@observer
export class OpportunitiesComposition extends Component<IOpportunitiesComposition, never> {
  public render() {
    return (
      <CenterPage>
        <div className={s.container}>
          <div>
            <h2>Возможности редактора</h2>
          </div>
          <ul>
            <li>
              <Items
                title="Менеджер сечений"
                img={first_1}
                text="Равным образом реализация намеченных плановых заданий
              обеспечивает широкому кругу (специалистов) участие в формировании
               позиций.
              Задача организации, в особенности же консультация с широким
              активом способствует подготовки и реализации модели развития."
              />
            </li>
            <li>
              <Items
                title="Удобные инструменты"
                img={second_2}
                text="Повседневная практика показывает, что постоянный
            количественный рост и сфера нашей активности требуют определения."
                turn={true}
              />
            </li>
            <li>
              <Items
                title="Просмотр графиков"
                img={third_3}
                text="Повседневная практика показывает, что постоянный
            количественный рост и сфера нашей активности требуют определения."
              />
            </li>
          </ul>
        </div>
      </CenterPage>
    );
  }
}
