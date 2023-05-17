import { useState } from "react"

const HookContador = (initial = 0, min, max) => {
    const [contador, setContador] = useState(initial)

    const sumar = () => {
        if(contador < max){
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > min){
            setContador(contador - 1)
        }
    }
    return{contador, sumar, restar}
}

export default HookContador