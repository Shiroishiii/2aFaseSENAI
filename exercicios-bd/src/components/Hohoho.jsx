import { useState } from "react"
import "./Hohoho.css"

function Hohoho() {
    const [inputHo, setInputHo] = useState()
    const [resultado, setResultado] = useState()

    function hoGenerator(inputHo){
        let cont = Math.max(0, Number(inputHo))

        if (cont > 0){
            setResultado(Array(cont).fill ('Ho').join (' ') + '!')
        }else{
            setResultado("!")
        }
    }

  return (
    <div  className="hohoho-container">
        <h1>Hohoho</h1>
        <a href="https://resources.beecrowd.com/repository/UOJ_1759_en.html">Link</a>
        <h2>Papai Noel</h2>
        <p>Quantos "Ho" o Papai Noel deve dizer?: </p>
        <input type="number" 
        value={inputHo}
        onChange={(e) => setInputHo(e.target.value)}
        />
        <button onClick={() => hoGenerator(inputHo)}>Definir</button>
        {resultado && <p>Resultado: {resultado}</p>}
    </div>
  )
}

export default Hohoho