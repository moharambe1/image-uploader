import classCss from '../style/components/upload-div.module.css'


const UploadDiv=(props)=>{
  return <div className={classCss.upload_div}>
  {props.children}
  </div>
}

export default UploadDiv;