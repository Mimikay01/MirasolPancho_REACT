import "./Buttons.css"

export default function Buttons({count, setCount}){
    return <div className="Buttons">
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
}