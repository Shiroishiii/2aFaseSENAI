import React, { useState } from 'react'
import './Moedas.css'

function Moedas() {
    const[real, setReal] = useState('')
    const[dolar, setDolar] = useState('')
    const[euro, setEuro] = useState('')

    const cotacao = {
        dolar: 5.43,
        euro: 6.36
    }

    function converterReal(valor){
        setReal(valor)
        setDolar(valor/cotacao.dolar)
        setEuro(valor/cotacao.euro)
    }

    function converterDolar(valor){
        setDolar(valor)
        setReal(valor*cotacao.dolar)
        setEuro((valor*cotacao.dolar) / cotacao.euro)
    }

    function converterEuro(valor){
        setEuro(valor)
        setDolar(valor*cotacao.euro)
        setReal((valor*cotacao.euro) / cotacao.dolar)
    }

  return (
    <div className='moedas-container'>
        <h2>Moedas</h2>
        <label htmlFor="">Real</label>
        <input type="number" 
            value={real}
            onChange={(e) => converterReal(e.target.value)}
        />
      
        <label htmlFor="">Dolar</label>
        <input type="number" 
            value={dolar}
            onChange={(e) => converterDolar(e.target.value)}
        />

        <label htmlFor="">Euro</label>
        <input type="number" 
            value={euro}
            onChange={(e) => converterEuro(e.target.value)}
        />

    </div>
  )
}

export default Moedas