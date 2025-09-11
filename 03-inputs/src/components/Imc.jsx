import './Imc.css'
import { useState } from "react"

function Imc() {
    const [inputPeso, setInputPeso] = useState('')
    const [inputAltura, setInputAltura] = useState('')
    const [resultado, setResultado] = useState('')

    function Calcular(){
       let peso = inputPeso
       let altura = inputAltura
       let imc

       imc = (peso / (altura * altura)).toFixed(2)

       let classificacao = ''

       if(imc < 18.5){
        classificacao = 'Abaixo do peso'
       }else if(imc > 18.5 && imc < 24.9){
        classificacao = 'Peso normal'
       }else if(imc > 24.9 && imc < 29.9){
        classificacao = 'Excesso de peso'
       }else if(imc > 29.9 && imc < 34.9){
        classificacao = 'Obesidade classe I'
       }else if(imc > 34.9 && imc < 39.9){
        classificacao = 'Obesidade classe II'
       }else if(imc > 39.9 || imc === 40){
        classificacao = 'Obesidade classe III'
       }

       setResultado("Seu imc: " + imc + " Sua classificação: " + classificacao)

    }

  return (
    <div className='imc-container'>
        <h1>Calculadora de IMC</h1>
        <label htmlFor="">Peso</label>
        <input type="text" 
        value={inputPeso}
        onChange={(e) => setInputPeso(e.target.value)}
        />
        <label htmlFor="">Altura</label>
        <input type="text" 
        value={inputAltura}
        onChange={(e) => setInputAltura(e.target.value)}
        />

        <button onClick={Calcular}>Mostrar IMC</button>
        {resultado && <p>Resultado: {resultado}</p>}
    </div>
  )
}

export default Imc