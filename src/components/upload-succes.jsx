import UploadDiv from "./upload-div";
import classCss from "../style/components/upload-succes.module.css";
import ButtonPrimary from "../shared/button_theme";
import Title from "../shared/title";
import { useEffect, useRef, useState } from "react";

const UploadSucces = (props) => {
  const refCopyFeedBack = useRef();
  const [isCopyed, setIsCopyed] = useState(0);

  useEffect(() => {
  }, [isCopyed]);

  function copyLinkHandeler() {
    navigator.clipboard.writeText(props.image.url);
    setIsCopyed(isCopyed+1);
  }
  return (
    <UploadDiv>
      <div className={classCss.check_circle}></div>
      <Title>Uploaded Successfully!</Title>

      <img className={classCss.img} src={props.image.data} alt=""></img>

      <div className={classCss.link_div}>
        <p className={classCss.link}>{props.image.url}</p>
        <ButtonPrimary className={classCss.btn} onClick={copyLinkHandeler}>
          Copy Link
        </ButtonPrimary>
      </div>
      {isCopyed ? (
        <div
          key={isCopyed}
          ref={refCopyFeedBack}
          className={`${classCss.copy_feed_back} ${classCss.animation_pop_up}`}
        >
          <div
            className={`${classCss.check_circle} ${classCss.feed_back}`}
          ></div>
          <p> Link is copyed </p>
        </div>
      ) : null}
    </UploadDiv>
  );
};

export default UploadSucces;
