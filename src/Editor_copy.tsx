/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from "react";

import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./components/editor/tools/tools";

const Editor = ({
  onAction,
  holder,
}: {
  onAction: () => void;
  holder: string;
}) => {
  const [editor, setEditor] = React.useState<EditorJS>();
  useEffect(() => {
    const myEditor = new EditorJS({
      holder: holder,
      // data:{}
      tools: EDITOR_JS_TOOLS,
    });
    setEditor(myEditor);
  }, [holder]);

  async function onSave() {
    const res = await (editor as EditorJS).save()
    console.log(res)
  }

  return (
    <>
      <div id={holder}></div>

      <button onClick={onSave}>Salvar</button>
    </>
  );
};

export default Editor
