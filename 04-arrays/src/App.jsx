import { useState } from 'react'
import './App.css'

function App() {
  const [pessoas, setPessoas] = useState([
    {id: 1, nome:'Dona Bete', idade: 72},
    {id: 2, nome:'Dr Auzio', idade: 78},
    {id: 3, nome:'Sarumano', idade: 68},
    {id: 11, nome:'Richard', idade: 72},
    {id: 21, nome:'Saro', idade: 78},
    {id: 31, nome:'Sano', idade: 68},
  ])
  const [inputNome, setInputNome] = useState()
  const [inputSenha, setInputSenha] = useState()

  function cadastro(){
    if(inputNome === '' && inputSenha === ''){
      Alert('Prencha os campos corretamente!')
    }else{
      usuarios = {
        id: Date.now(),
        nome: inputNome,
        senha: inputSenha
      }

      alert('Cadastro efetuado')
    }
  }

  function cadastrar(){
    let pessoa = {
      id: Date.now(),
      nome: prompt('Nome: '),
      idade: Number(prompt('Idade: ')),
    }
    console.log(pessoa);
  
    setPessoas([pessoa, ...pessoas])
  }

  return (
    <div>
      <h1>Arrays</h1>
      <div className='formCadastro'>
        <label htmlFor="">Nome</label>
        <input type="text" 
        value={inputNome}
        onChange={(e) => setInputNome(e.target.value)}
        />
        <label htmlFor="">Senha</label>
        <input type="password" 
        value={inputSenha}
        onChange={(e) => setInputSenha(e.target.value)}
        />
      </div>
      <div className='container-cards'>
        {pessoas.map((pessoa) => (
          <div key={pessoa.id} className='card-pessoa'>
            <h2>{pessoa.nome}</h2>
            <p>Idade: {pessoa.idade}</p>
          </div>
        ))}
      </div>
      <button onClick={cadastrar}>Cadastro</button>
      <button onClick={cadastro}>Cadastro 2</button>
    </div>
  )
}

export default App
