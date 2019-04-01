import { observer } from "mobx-react";
import React, { Component } from "react";
import { IEditorComposition } from "../../interfaces/IEditorComposition";

@observer
export class EditorComposition extends Component<IEditorComposition, never> {
  public render() {
    const { adapter, actions } = this.props;

    console.log({ adapter, actions });

    return <span>Editor Composition</span>;
  }
}
