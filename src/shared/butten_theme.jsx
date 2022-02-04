import classCss from "../style/shared/butten.module.css"


const ButtenPrimary=(props)=>{
  return <button className={`${classCss.butten_primary} ${props.className}`}>{props.children}</button>
}


export default ButtenPrimary;