import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import React, { useEffect, useState } from "react";
import { convertToRaw, EditorState, ContentState, convertFromHTML } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from 'html-to-draftjs';
import DOMPurify from 'dompurify';
// INITIAL STATE
// EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(defaultValue)))
const getInitialState = (defaultValue) => {
  if (defaultValue) {
    const blocksFromHtml = htmlToDraft(defaultValue);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    return EditorState.createWithContent(contentState);
  } else {
    return EditorState.createEmpty();
  }
};

const UpdateTextEditor = ({handleContent,content}) => {
//   const blocksFromHTML = convertFromHTML(content);

//   const initialContentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
// const state = ContentState.createFromBlockArray(
//   blocksFromHTML.contentBlocks,
//   blocksFromHTML.entityMap
// );


const [editorState, setEditorState] = useState(getInitialState(content));
const onEditorChange = (val) => {
  setEditorState(val);
  const rawContentState = convertToRaw(val.getCurrentContent());
  const htmlOutput = draftToHtml(rawContentState);
  const cleanHtml = DOMPurify.sanitize(htmlOutput);
  handleContent && handleContent(cleanHtml);
};

  function uploadCallback(file) {
    return new Promise(
     async(resolve, reject) => {
          if (file) {
            const data = new FormData();
            data.append("fImage", file)

             const res = await fetch("/api/v1/post/contentimage",{
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
//  useEffect(()=>{
//     handleContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
//     // document.querySelector("#text_there").innerHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()))
//  },[editorState])
  return (
    <div className="App">
      <header className="App-header py-2">Description</header>
      <div className="border border-black p-1 min-h-[200px]">
      <Editor
      toolbar={{ image: { uploadCallback: uploadCallback }}}
        editorState={editorState}
        onEditorStateChange={onEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class border p-2 min-h-[200px]"
        toolbarClassName="toolbar-class"
        placeholder="Enter your blog description"
      />
      </div>
      
    </div>
  );
};

export default UpdateTextEditor;