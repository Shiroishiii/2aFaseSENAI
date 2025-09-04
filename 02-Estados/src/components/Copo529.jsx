import { useState } from "react"

function Copo529() {
    const [numero, setNumero] = useState()
    const [resultado, setResultado] = useState()

    function verificar(){
        let numero = Number(prompt("Digite um número"))
        let resultado = ''

        setNumero(numero)
        
        if(numero > 0){
            resultado = 'Positivo'
        }else if(numero < 0){
            resultado = 'Negativo'
        }else{
            resultado = 'Nulo'
        }

        setResultado(resultado)
    }

  return (
    <div>
        <h1>Copo meio cheio - 5.29</h1>
        <button onClick={verificar}>Verificar número</button>
        <p>Resultado:</p>
        {resultado}
        <p>Número escolhido:</p>
        {numero}
    </div>
  )
}

export default Copo529