import React, { useState } from 'react'

function Avisador() {
    const [mensagem, setMensagem] = useState()

    function avisar(){
        setMensagem(true)
    }
  return (
    <div>
        <h1>O grande avisador</h1>
        {!mensagem && <button onClick={avisar}>Aviso !!!</button>}
        {mensagem && <p>Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.</p>}
    </div>
  )
}

export default Avisador