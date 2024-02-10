import React, { useEffect, useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";

const TestEditor = ({handleContent}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
 

  function uploadCallback(file) {
    return new Promise(
     async(resolve, reject) => {
          if (file) {
            const data = new FormData();
            data.append("fImage", file)

             const res = await fetch("/api/blog/contentimage",{
                method:"POST",
                body:data
              })
              let image = await res.json()
              console.log(image)
              resolve({ data: { link: image.image }})
              
          }
      }
  );
 
  }
 useEffect(()=>{
    handleContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    // document.querySelector("#text_there").innerHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()))
 },[editorState])
  return (
    <div className="App">
      <header className="App-header py-2">Description</header>
      <div className="border border-black p-1 min-h-[200px]">
      <Editor
      toolbar={{ image: { uploadCallback: uploadCallback }}}
        defaultEditorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class border p-2 min-h-[200px]"
        toolbarClassName="toolbar-class"
        placeholder="Enter your blog description"
      />
      </div>
      {/* <div className="code-view">
        <p>HTML View </p>
        <textarea
          className="text-area"
          disabled
        
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div> */}
      {/* <div id="text_there" className="w-full">
        
      </div> */}
    </div>
  );
};

export default TestEditor;