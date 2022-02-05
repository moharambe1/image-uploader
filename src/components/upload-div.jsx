import { forwardRef } from 'react';
import classCss from '../style/components/upload-div.module.css'


const UploadDiv=forwardRef((props,ref)=>{
  return <div ref={ref} className={`${classCss.upload_div} ${props.className}`}>
  {props.children}
  </div>
})

export default UploadDiv;