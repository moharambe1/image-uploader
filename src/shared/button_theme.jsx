import classCss from "../style/shared/button.module.css"


const ButtonPrimary=(props)=>{
  
  return <button onClick={props.onClick} className={`${classCss.butten_primary} ${props.className}`}>{props.children}</button>
}


export default ButtonPrimary;