
import classCss from '../style/shared/pop-up.module.css'


const PopUp=(props)=>{
  return <div className={`${classCss.pop_up} ${props.className}`}>
  {props.title==='Error'? <div className={classCss.icon}></div> :<h3>{props.title}</h3>}
  
  <p>{props.message}</p>
  </div>
}

export default PopUp;