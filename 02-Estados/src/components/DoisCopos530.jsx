import { useState } from "react"

function DoisCopos530() {
    const [numero, setNumero] = useState()
    const [resultado, setResultado] = useState()
    const [resultadoParOuImpar, setResultadoParOuImpar] = useState()

    function verificar(){
        let numero = Number(prompt("Digite um número"))
        let resultado = ''
        let resultadoParOuImpar = ''

        setNumero(numero)
        
        if(numero > 0){
            resultado = 'Positivo'
        }else if(numero < 0){
            resultado = 'Negativo'
        }else{
            resultado = 'Nulo'
        }

        setResultado(resultado)


        if(numero % 2 === 0){
            resultadoParOuImpar = 'Par'
        }else{
            resultadoParOuImpar = 'Impar'
        }

        setResultadoParOuImpar(resultadoParOuImpar)
    }
  return (
    <div>
        <h1>Dois copos meio cheios - 5.30</h1>
        <button onClick={verificar}>Verificar número</button>
        <p>Resultado:</p>
        {resultado}
        <p>Resultado Par ou Impar:</p>
        {resultadoParOuImpar}
        <p>Número escolhido:</p>
        {numero}
    </div>
  )
}

export default DoisCopos530