import { useState, useEffect, useRef } from "react";

import UploadDiv from "./upload-div";
import classCss from "../style/components/upload-img.module.css";

const UploadImg = (props) => {
  //Must add handleDrop function to handel drop files
  const dropRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  let DragItemsConter = 0;
  useEffect(() => {
    let uploadDiv = dropRef.current;
    uploadDiv.addEventListener("dragstart", handleDragStart);
    uploadDiv.addEventListener("dragenter", handleDragIn);
    uploadDiv.addEventListener("dragleave", handleDragOut);
    uploadDiv.addEventListener("dragover", handleDrag);
    uploadDiv.addEventListener("drop", handleDrop);

    return () => {
      uploadDiv.removeEventListener("dragleave", handleDragOut);
      uploadDiv.removeEventListener("dragenter", handleDragIn);
      uploadDiv.removeEventListener("dragover", handleDrag);
      uploadDiv.removeEventListener("drop", handleDrop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UploadDiv ref={dropRef}>
      <h3 className={classCss.titel}>Upload your image</h3>
      <p className={classCss.text}>File should be Jpeg, Png,...</p>
      <div
        className={`${classCss.drop_img_dev} ${
          isDrag ? classCss.highlight : null
        }`}
      >
        <p className={isDrag ? classCss.text_highlight : null}>
          {" "}
          {isDrag ? "Drop Here" : "Drag & Drop your image here"}
        </p>
      </div>
      <p className={classCss.or}>Or</p>
      <button className={classCss.choose_a_file}>Choose a file</button>
    </UploadDiv>
  );

  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!isDrag && e.dataTransfer.items.length > 0) setIsDrag(true);
  }
  function handleDragIn(e) {
    e.preventDefault();
    e.stopPropagation();
    DragItemsConter++;
    if (!isDrag && e.dataTransfer.items.length > 0) setIsDrag(true);
  }
  function handleDragOut(e) {
    e.preventDefault();
    e.stopPropagation();
    DragItemsConter--;
    if (DragItemsConter === 0) setIsDrag(false);
  }
  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsDrag(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      try {
        props.handleDrop(e.dataTransfer.files);
      } catch (err) {
        if (props.handleDrop == null)
          console.error(
            "Error: mast provided handleDrop function to handle doped files"
          );
        console.error(err);
      }
      DragItemsConter = 0;
    }
  }

  function handleDragStart(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.clearData();
  }
};

export default UploadImg;
