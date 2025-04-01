import React from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editors = () => {
  return (
    <div>
        <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={(editorState) => {
                  if (editorState.blocks) {
                    props.onChange(editorState.blocks[0]);
                  }
                }}
              />
    </div>
  );
};

export default Editors;
