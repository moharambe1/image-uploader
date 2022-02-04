import UploadDiv from './upload-div';
import classCss from '../style/components/upload-img.module.css'


const UploadImg=()=>{
  

  return <UploadDiv>
    <h3 className={classCss.titel}>Upload your image</h3>
    <p className={classCss.text}>File should be Jpeg, Png,...</p>
    <div className={classCss.drop_img_dev}><p> Drag &#38; Drop your image here</p></div>
    <p className={classCss.or}>Or</p>
    <button className={classCss.choose_a_file}>Choose a file</button>
  </UploadDiv>
}


export default UploadImg;