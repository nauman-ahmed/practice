import { useState } from "react"

const Counter: React.FC = () => {
    
    const [count, setCount] = useState<number>(0)

    const incrementHandler = (): void => { setCount((prevState) => prevState+1) }
    const decrementHandler = (): void => { if (count == 0) return; setCount((prevState) => prevState-1) }
    const resetHandler = (): void => { setCount(0) }

    return (
        <div>
            <div className="flex justify-center mb-10">{count}</div>
            <button className="px-4 py-2 bg-blue-300 rounded-lg mx-4" onClick={incrementHandler}>+</button>
            <button className={`px-4 py-2 ${count == 0 ? 'bg-slate-500': 'bg-red-300'} rounded-lg mx-4`} onClick={decrementHandler}>-</button>
            <button className="px-4 py-2 bg-green-300 rounded-lg mx-4" onClick={resetHandler}>Reset</button>
        </div>
    )
}

export default Counter