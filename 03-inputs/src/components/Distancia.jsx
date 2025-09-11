import './Distancia.css'
import { useState } from "react"

function Distancia() {
    const [inputDistancia, setInputDistancia] = useState('')
    const [unidDe, setUnidDe] = useState('Metros')
    const [unidPara, setUnidPara] = useState('Quilômetros')
    const [resultado, setResultado] = useState()

    function Converter(){
        if (inputDistancia === '') {
            alert('Por favor, digite uma temperatura para converter.');
            return;
        }
      
          const distancia = parseFloat(inputDistancia);
        if (isNaN(distancia)) {
            alert('Por favor, digite um número válido.');
            return;
        }

        let metros

        if(unidDe === 'Metros'){
            metros = distancia;
        }else if (unidDe === 'Milhas'){
            metros = distancia * 1609.34;
        }else if (unidDe === 'Quilômetros'){
            metros = distancia * 1000;
        }else if (unidDe === 'Pés'){
            metros = distancia * 0.3048;
        }

        let convertido

        if(unidPara === 'Metros'){
            convertido = metros;
        }else if (unidPara === 'Milhas'){
            convertido = metros / 1609.34;
        }else if (unidPara === 'Quilômetros'){
            convertido = metros / 1000;
        }else if (unidPara === 'Pés'){
            convertido = metros / 0.3048;
        }


        setResultado(convertido);
    }

  return (
    <div className="distancia-container">
        <h1>Conversor de Distância </h1>
        <label htmlFor="">De: 
            <select value={unidDe} onChange={(e) => setUnidDe(e.target.value)}>
                <option value="Metros">Metros</option>
                <option value="Quilômetros">Quilômetros</option>
                <option value="Milhas">Milhas</option>
                <option value="Pés">Pés</option>
            </select>
        </label>
        <label htmlFor=""> Para: 
            <select value={unidPara} onChange={(e) => setUnidPara(e.target.value)}>
                <option value="Metros">Metros</option>
                <option value="Quilômetros">Quilômetros</option>
                <option value="Milhas">Milhas</option>
                <option value="Pés">Pés</option>
            </select>
        </label>
        <label htmlFor="">Digite a distância que deseja converter:</label>
        <input type="text" 
            value={inputDistancia}
            onChange={(e) => setInputDistancia(e.target.value)}
        />
        <button onClick={Converter}>Mostrar resultado</button>

        {resultado && <p>Resultado: {resultado}</p>}
    </div>
  )
}

export default Distancia