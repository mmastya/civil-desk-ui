import { editorAdapter } from "adapters/editor";
import { EditorComposition } from "compositions/EditorComposition/EditorComposition";
import { observer } from "mobx-react";
import React, { Component } from "react";

@observer
export class EditorPage extends Component {
  public render() {
    return <EditorComposition {...editorAdapter} />;
  }
}
