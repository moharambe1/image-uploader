
import UploadDiv from "./upload-div"
import classCss from "../style/components/upload-succes.module.css"
import ButtenPrimary from "../shared/butten_theme";
import Title from "../shared/title";

const UploadSucces=(props)=>{
  return <UploadDiv>
    <div className={classCss.check_circle}></div>
    <Title >Uploaded Successfully!</Title>

       <img className={classCss.img} src={props.imgUrl} alt=""></img>
    
    <div className={classCss.link_div}>
      <p className={classCss.link}>{props.imgUrl}</p>    
      <ButtenPrimary className={classCss.btn}>Copy Link</ButtenPrimary>
    </div>
  </UploadDiv>
}

export default UploadSucces;