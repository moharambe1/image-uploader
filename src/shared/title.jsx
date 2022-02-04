
import classCss from '../style/shared/title.module.css'

const Title= (props)=>{
  return <h3 className={classCss.title}>{props.children}</h3>
}



export default Title;