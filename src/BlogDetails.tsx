import { useState } from "react";
import Editor from "./components/editor/Editor";
export default function BlogDetails() {
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  function toggleEditMode() {
    if (isEditMode) {
      setIsEditMode(false);
      console.log("Edit mode is now disabled");
    } else {
      setIsEditMode(true);
      console.log("Edit mode is now enabled");
    }
  }
  return (
    <>
      <button id="toggle-edit-btn" onClick={toggleEditMode}>
        Toggle Edit Mode
      </button>
      <div className="app-content">
        {isEditMode ? (
          <Editor
            data={data}
            setData={setData}
            title={title}
            setTitle={setTitle}
            setIsEditMode={setIsEditMode}
          />
        ) : (
          <div>
            <h4>Title</h4>
            <h3>{title}</h3>
          </div>
          //   <EditorTextParser data={data} />
        )}
      </div>
    </>
  );
}
