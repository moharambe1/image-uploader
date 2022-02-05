import { useState } from "react";

import classCss from "../style/pages/upload-page.module.css";
import UploadImg from "../components/upload-img";
import UploadBarPrgrs from "../components/upload-bar-prgs";
import UploadSucces from "../components/upload-succes";

function UploadPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className={classCss.upload_page}>
      {isDone ? <UploadSucces imgUrl="https://static-cse.canva.com/blob/666309/bestfreestockphotos.jpg" /> :
        (isLoading ? <UploadBarPrgrs /> : <UploadImg handleDrop={handleDrop} />)}
      
      
      <footer className={classCss.footer_text}>reated by username - moharambe1</footer>
    </div>
  );
  function handleDrop(files){
    console.log(files);
  }
}

export default UploadPage;
