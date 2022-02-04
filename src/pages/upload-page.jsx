import { useState } from "react";

import classCss from "../style/pages/upload-page.module.css";
import UploadImg from "../components/upload-img";
import UploadBarPrgrs from "../components/upload-bar-prgs";

function UploadPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={classCss.upload_page}>
      {isLoading ? <UploadBarPrgrs /> : <UploadImg />}
      <footer className={classCss.footer_text}>created by username - moharambe1</footer>
    </div>
  );
}

export default UploadPage;
