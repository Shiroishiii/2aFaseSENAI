import { useState } from 'react'
import './Pneu.css'

function Pneu() {
    const [inputPressaoDesejada, setInputPressaoDesejada] = useState()
    const [inputPressaoLida, setInputPressaoLida] = useState()
    const [resultado, setResultado] = useState()

    function calculo(){
        let pressaoLida = Number(inputPressaoLida)
        let pressaoDesejada = Number(inputPressaoDesejada)
        let diferenca

        diferenca = (pressaoDesejada - pressaoLida)

        setResultado(diferenca)
    }

  return (
    <div className='pneu-container'>
        <h1>Pneu </h1>
        <a href="https://resources.beecrowd.com/repository/UOJ_2374_en.html">Link</a>
        <h2>SBC - Sistemas de Bombas Computadorizados</h2>
        <p>Pressão desejada no Pneu:</p>
        <input type="number" 
        value={inputPressaoDesejada}
        onChange={(e) => setInputPressaoDesejada(e.target.value)}
        />
        <p>Pressão lida no Pneu:</p>
        <input type="number" 
        value={inputPressaoLida}
        onChange={(e) => setInputPressaoLida(e.target.value)}
        />
        <button onClick={calculo}>Calcular diferença</button>
        {resultado && <p>Resultado: {resultado}</p>}
    </div>
  )
}

export default Pneu