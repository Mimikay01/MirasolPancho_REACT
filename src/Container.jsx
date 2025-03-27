import Buttons from "./Buttons"
import "./Container.css"

export default function Container({count, setCount}){
    return <div className="Container"> 
        <Buttons count={count} setCount={setCount}/>
    </div>
}