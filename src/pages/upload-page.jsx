import { useState, useEffect } from "react";

import classCss from "../style/pages/upload-page.module.css";
import UploadImg from "../components/upload-img";
import UploadBarPrgrs from "../components/upload-bar-prgs";
import UploadSucces from "../components/upload-succes";
import mng_upload_page from "../logic/manager/mng-upload-page";
import PopUp from "../shared/pop-up";

function UploadPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [isImgUploaded, setIsImgUploaded] = useState(null);
  const [isPopUp, setIsPopUp] = useState(null);

  useEffect(() => {
    mng_upload_page.pageSetIsUploading = setIsUploading;
    mng_upload_page.pageSetIsImgUploaded = setIsImgUploaded;
    mng_upload_page.pageSetIsPopUp = setIsPopUp;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classCss.upload_page}>
      {isPopUp ? <PopUp title={isPopUp.title} message={isPopUp.message} /> : null}
     
      {isImgUploaded ? <UploadSucces image={isImgUploaded} /> : (isUploading ? <UploadBarPrgrs /> : <UploadImg handleDrop={handleDrop} />)}

      <footer className={classCss.footer_text}> created by <a href="https://github.com/moharambe1" target="_blank">@moharambe1</a> - <a href="https://devchallenges.io/" target="_blank">devChallenges.io</a></footer>
    </div>
  );
  function handleDrop(files) {
    mng_upload_page.pageDropImgHandler(files);
  }
}

export default UploadPage;
