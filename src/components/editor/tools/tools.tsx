// tools.js
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import ImageTool from "@editorjs/image";
import AttachesTool from "@editorjs/attaches";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  list: List,
  code: Code,
  linkTool: LinkTool,
  image: {
    class: ImageTool,
    config: {
      uploader: {
        async uploadByFile(file: Record<never, never>) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file as Blob);

          const encodedImg = await new Promise((resolve) => {
            fileReader.onload = () => {
              const { result } = fileReader;
              resolve(result);
            };
          });

          return {
            success: 1,
            file: {
              url: encodedImg,
            },
          };
        },
      },
    },
  },
  attaches: {
    class: AttachesTool,
    config: {
      uploader: {
        async uploadByFile(file: Record<never, never>) { 
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file as Blob);

          const encodedImg = await new Promise((resolve) => {
            fileReader.onload = () => {
              const { result } = fileReader;
              resolve(result);
            };
          });

          return {
            success: 1,
            file: {
              url: encodedImg,
            },
          };
        }, 
      },
    },
  },
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
};
