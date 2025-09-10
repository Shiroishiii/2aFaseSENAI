import './Demo.css'
import { useState } from "react"

function Demo() {
    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState ('')

    function fazerLogin(){
        alert('Nome: ' + inputUsername + ' Senha: ' + inputPassword)
    }
  return (
    <div className="demo-container">
        <h2>Demo</h2>
        <label htmlFor="">Username</label>
        <input type="text" 
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
        />
        <label htmlFor=""> Password</label>
        <input type="password" 
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
        />
        <button onClick={fazerLogin}>Login</button>
        </div>
  )
}

export default Demo