/* eslint-disable react-refresh/only-export-components */
import React, { memo, useEffect } from "react";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
import AttachesTool from "@editorjs/attaches";
import LinkTool from "@editorjs/link";
import InlineCode from '@editorjs/inline-code';
import Table from '@editorjs/table'
import TextVariantTune from '@editorjs/text-variant-tune';
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune';
import NestedList from '@editorjs/nested-list';
const EditorBlock = ({
  onAction,
  holder,
}: {
  onAction: () => void;
  holder: string;
}) => {
  const [editor, setEditor] = React.useState<EditorJS>();
  function onSave() {
    (editor as EditorJS)
      .save()
      .then(onAction)
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  }
  useEffect(() => {
    const myEditor = new EditorJS({
      holder: holder,
      tools: {
        AlignmentTuneTool: {
          class: AlignmentTuneTool,
          config: {
            default: "left",
          },
        },

        list: {
          class: NestedList,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          },
        },

        textVariant: TextVariantTune,

        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+M',
        },
        header: {
          class: Header,
          inlineToolbar: true,
        },
        embed: Embed,
        linkTool: LinkTool,
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            withHeadings: true,
          }
        },

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

              // uploadByUrl(url) {
              //   console.log(url);
              // },
            },
          },
        },
      },
      tunes: ['textVariant', "AlignmentTuneTool"],
    });
    setEditor(myEditor);
  }, [holder]);

  return (
    <>
      <div style={{ backgroundColor: "gray" }} id={holder}></div>

      <button onClick={onSave}>Salvar</button>
    </>
  );
};

export default memo(EditorBlock);
