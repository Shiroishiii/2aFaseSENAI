import './Temperatura.css'
import { useState } from "react"

function Temperatura() {
    const [inputTempUm, setInputTempUm] = useState('')
    const [unidDe, setUnidDe] = useState('Celsius')
    const [unidPara, setUnidPara] = useState('Fahrenheit')
    const [resultado, setResultado] = useState()

    function Converter(){
        if (inputTempUm === '') {
            alert('Por favor, digite uma temperatura para converter.');
            return;
        }
      
          const temp = parseFloat(inputTempUm);
        if (isNaN(temp)) {
            alert('Por favor, digite um número válido.');
            return;
        }

        let celsius

        if(unidDe === 'Celsius'){
            celsius = temp;
        }else if (unidDe === 'Fahrenheit'){
            celsius = (temp - 32) * 5 / 9;
        }else if (unidDe === 'Kelvin'){
            celsius = temp - 273.15;
        }

        let convertido

        if(unidPara === 'Celsius'){
            convertido = celsius;
        }else if (unidPara === 'Fahrenheit'){
            convertido = celsius * 9 / 5 + 32;
        }else if (unidPara === 'Kelvin'){
            convertido = celsius + 273.15;
        }


        setResultado(`${temp.toFixed(2)} ${unidDe} = ${convertido.toFixed(2)} ${unidPara}`);
    }

  return (
    <div className='temperatura-container'>
        <h1>Conversor de temperatura</h1>
        <label htmlFor="">De: 
            <select value={unidDe} onChange={(e) => setUnidDe(e.target.value)}>
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Kelvin">Kelvin</option>
            </select>
        </label>
        <label htmlFor=""> Para: 
            <select value={unidPara} onChange={(e) => setUnidPara(e.target.value)}>
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Kelvin">Kelvin</option>
            </select>
        </label>
        <label htmlFor="">Digite a temperatura:</label>
        <input type="text" 
            value={inputTempUm}
            onChange={(e) => setInputTempUm(e.target.value)}
        />
        <button onClick={Converter}>Mostrar resultado</button>

        {resultado && <p>Resultado: {resultado}</p>}
    </div>
  )
}

export default Temperatura