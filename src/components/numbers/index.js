import { useContext } from "react"
import { CounterContext } from "../../context/counter"

export default function Numbers(){
    const { num } = useContext(CounterContext)
    return (
        <>{num}</>
    )
}
