import { useState,useEffect } from "react";

import classCss from "../style/pages/upload-page.module.css";
import UploadImg from "../components/upload-img";
import UploadBarPrgrs from "../components/upload-bar-prgs";
import UploadSucces from "../components/upload-succes";
import mng_upload_page from "../logic/manager/mng-upload-page";

function UploadPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [isImgUploaded, setIsImgUploaded] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(()=>{
    mng_upload_page.pageSetIsUploading=setIsUploading;
    mng_upload_page.pageSetIsImgUploaded=setIsImgUploaded;
    mng_upload_page.pageSetIsImgUploadSuccess=setIsSuccess;
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className={classCss.upload_page}>
      {isImgUploaded ? <UploadSucces imgUrl={isImgUploaded} /> : (isUploading ? <UploadBarPrgrs /> : <UploadImg handleDrop={handleDrop} />)}
      
      
      <footer className={classCss.footer_text}>reated by username - moharambe1</footer>
    </div>
  );
  function handleDrop(files){
    mng_upload_page.pageDropImgHandler(files);
  }
}

export default UploadPage;
