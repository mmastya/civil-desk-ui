import withStyles from "isomorphic-style-loader/withStyles";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { CenterPage } from "../../../../components/center/CenterPage";
import { Demo } from "./components/Demo/Demo";
import { Video } from "./components/Video/Video";
import s from "./NewOpportunitiesComposition.css";

// tslint:disable-next-line: no-empty-interface
interface INewOpportunitiesComposition {}

@withStyles(s)
@observer
export class NewOpportunitiesComposition extends Component<INewOpportunitiesComposition, never> {
  public render() {
    return (
      <CenterPage>
        <div className={s.root}>
          <div>
            <h2>Исследуйте новые возможности</h2>
            <h3>Развитие структуры играет важную роль в формировании</h3>
          </div>
          <div>
            <Video src="https://www.youtube.com/embed/Vecpln_VbFI" />
            <div className={s.video}>
              <h3>Обзорный видеоролик</h3>
              <p>
                Задача организации, в особенности же консультация с широким активом способствует подготовки и реализации
                модели развития. Значимость этих проблем настолько очевидна, что консультация с широким активом требуют
                от нас анализа позиций, занимаемых участниками в отношении поставленных задач.
              </p>
              <h4>
                Посмотреть видеоролик <span>(1:32)</span>
              </h4>
            </div>
          </div>
          <div>
            <div>
              <h3>Демонстрационные видеоролики</h3>
            </div>
            <ul>
              <li>
                <Demo
                  src={"https://www.youtube.com/embed/Vecpln_VbFI"}
                  title="Демо"
                  text="Задача организации, в особенности же консультация с широким"
                />
              </li>
              <li>
                <Demo
                  src={"https://www.youtube.com/embed/Vecpln_VbFI"}
                  title="Демо"
                  text="Задача организации, в особенности же консультация с широким"
                />
              </li>
              <li>
                <Demo
                  src={"https://www.youtube.com/embed/Vecpln_VbFI"}
                  title="Демо"
                  text="Задача организации, в особенности же консультация с широким"
                />
              </li>
            </ul>
          </div>
        </div>
      </CenterPage>
    );
  }
}
