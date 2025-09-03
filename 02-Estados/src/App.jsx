import { useState } from 'react'
import './App.css'
import Venda523 from './components/Venda523'
import Media524 from './components/Media524'

function App() {
  const[numero, setNumero] = useState(0)
  const[username, setUsername] = useState()
  const[produto, setProduto] = useState()

  function incrementar(){
    setNumero(numero + 1)
  }

  function decrementar(){
    setNumero(numero - 1)
  }

  function logar(){
    let nome = prompt('Digite seu nome:')
    setUsername(nome)
  }

  return (
    <>

      {/* {username && <p>render condicional</p>} */}
      {username && 
      <p className='user'>
        Olá {username}
      </p>
      }
      <button onClick={logar}>logar</button>
      <h1>Estados</h1>
      <button onClick={decrementar}>-</button>
      {numero}
      <button onClick={incrementar}>+</button>
      <Venda523 />
      <Media524 />
    </>
  )
}

export default App
