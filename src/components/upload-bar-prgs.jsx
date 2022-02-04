import UploadDiv from "./upload-div"
import classCss from'../style/components/upload-bar-prgs.module.css'


const UploadBarPrgrs = (props) => {

  return  <UploadDiv> 
    <h3 className={classCss.titel}>Uploading...</h3>
    <div className={`${classCss.outer_div} ${classCss.bar}`}><div className={`${classCss.inner_div} ${classCss.bar}`}></div></div>
  </UploadDiv>
}

export default UploadBarPrgrs;