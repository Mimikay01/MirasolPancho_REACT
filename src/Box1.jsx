import Container from "./Container"
import "./Box1.css"

export default function Box1({count, setCount}){
    return <div className="Box1">
        <p>The value of count is {count}</p>
        <Container count={count} setCount={setCount}/>
    </div>
}