import { useState } from "react"

function Media524() {

    const [notaUm, setNotaUm] = useState()
    const [notaDois, setNotaDois] = useState()
    const [media, setMedia] = useState()
    const [conceito, setConceito] = useState()

    function calcular(){
        let n1 = Number(prompt("Digite sua primeira nota: "))
        let n2 = Number(prompt("Digite sua segunda nota: "))
        setNotaUm(n1)
        setNotaDois(n2)

        const m = (n1 + n2) / 2
        setMedia(m)

        
    }

  return (
    <div>
        <h2>Média - 5.24</h2>
        <button onClick={calcular}>Média</button>
        <p>Primeira nota: {notaUm}</p>
        <p>Segunda nota: {notaDois}</p>
        <p>Média: {media}</p>
        <p>Conceito: {conceito}</p>
    </div>
  )
}

export default Media524