import { useContext } from "react"
import { CounterContext } from '../../context/counter';

export default function Counter({ children }){
    const { handleDown, handleUp } = useContext(CounterContext)

    return (
        <>
            <button onClick={handleDown}>-</button>
            {children}
            <button onClick={handleUp}>+</button>
        </>
    )
}
