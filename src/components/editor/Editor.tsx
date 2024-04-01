import React, { useRef, useCallback } from "react";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools/tools";
import { OutputData } from "@editorjs/editorjs";
import axiosInstance from "../../axios";

export default function Editor({
  data,
  setData,
  title,
  setTitle,
  setIsEditMode,
}: {
  data: OutputData;
  setData: React.Dispatch<never>;
  title: string;
  setIsEditMode: React.Dispatch<boolean>;
  setTitle: React.Dispatch<string>;
}) {
  const editorCore = useRef(null);
  const ReactEditorJS = createReactEditorJS();

  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const handleSave = useCallback(async () => {
    if (editorCore.current) {
      const savedData =
        await editorCore.current.dangerouslyLowLevelInstance?.save();
      setData(savedData);
      console.log(savedData);
      // axiosInstance
      //   .post("/post", {
      //     title: title,
      //     json: JSON.stringify(savedData),
      //   })
      //   .then((res) => {
      //     setIsEditMode(false);
      //   });
    }
  }, [setData, setIsEditMode, title]);

  return (
    <div className="editor-container">
      <h4 className="edit-mode-alert">! Edit Mode Enabled</h4>
      <div>
        <h4>Title</h4>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          defaultValue={title}
        />
      </div>

      <ReactEditorJS
        holder="custom" 
        minHeight={0}
        placeholder={"Press / and start writing blog"}
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS} 
        defaultValue={data}
      />

      <button id="toggle-edit-btn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
