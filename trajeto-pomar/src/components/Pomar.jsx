import { useState } from 'react';
import './Pomar.css'

function Pomar() {

    const precos = {
    "Maçã": 1.5,
    "Laranja": 2.0,
    "Bergamota": 1.0,
    "Banana": 1.2,
    "Pera": 0.5,
  };

  const [qntdMaca, setQntdMaca] = useState()
  const [qntdLaranja, setQntdLaranja] = useState()
  const [qntdBergamota, setQntdBergamota] = useState()
  const [qntdBanana, setQntdBanana] = useState()
  const [qntdPera, setQntdPera] = useState()
  const [total, setTotal] = useState()

  function calcular(){
    const maca = Number(qntdMaca) * precos["Maçã"];
    const laranja = Number(qntdLaranja) * precos["Laranja"];
    const bergamota = Number(qntdBergamota) * precos["Bergamota"];
    const banana = Number(qntdBanana) * precos["Banana"];
    const pera = Number(qntdPera) * precos["Pera"];

    setTotal(maca + laranja + bergamota + banana + pera).toFixed(2)
  }

  return (
    <div>
        <h1>Trajeto Pomar</h1>
      <a href="https://rafaellindemann.notion.site/Trajeto-Pomar-v0-202d393ff68e8156aad8cc444ad9c210">Link do exercício</a><br />
      <label htmlFor="">Quantidade de maças:</label>
      <input type="number" 
      value={qntdMaca}
      onChange={(e) => setQntdMaca(e.target.value)}
      />
      <label htmlFor="">Quantidade de laranjas:</label>
      <input type="number" 
      value={qntdLaranja}
      onChange={(e) => setQntdLaranja(e.target.value)}
      />
      <label htmlFor="">Quantidade de bergamotas:</label>
      <input type="number" 
      value={qntdBergamota}
      onChange={(e) => setQntdBergamota(e.target.value)}
      />
      <label htmlFor="">Quantidade de bananas:</label>
      <input type="number" 
      value={qntdBanana}
      onChange={(e) => setQntdBanana(e.target.value)}
      />
      <label htmlFor="">Quantidade de peras:</label>
      <input type="number" 
      value={qntdPera}
      onChange={(e) => setQntdPera(e.target.value)}
      />

      <button onClick={calcular}>Calcular total</button>

      <h2>Total: R${total}</h2>
    </div>
  )
}

export default Pomar