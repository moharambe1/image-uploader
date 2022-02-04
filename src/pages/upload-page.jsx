import { useState } from "react";

import "../style/pages/upload-page.css";
import UploadImg from "../components/upload-img";
import UploadBarPrgrs from "../components/upload-bar-prgs";

function UploadPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="upload-page">
      {isLoading ? <UploadBarPrgrs /> : <UploadImg />}
    </div>
  );
}

export default UploadPage;
