import { useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default function TextEditor() {
  interface EditorWrapper extends HTMLDivElement {}

  const editorRef = useCallback((wrapper: EditorWrapper | null) => {
    if (wrapper === null) return;
    wrapper.innerHTML = "";
    const editor: HTMLDivElement = document.createElement("div");
    wrapper?.append(editor);

    new Quill(editor, {
      theme: "snow",
    });
  }, []);
  return (
    <>
      <div className="bg-[#f3f3f3]">
        <div id="container" ref={editorRef}>
          {" "}
        </div>
      </div>
    </>
  );
}
