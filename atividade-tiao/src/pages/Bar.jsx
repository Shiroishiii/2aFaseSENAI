import './Bar.css'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Bar() {
    const {produtosBar} = useContext(GlobalContext)


  return (
    <div>
        <Navbar />
        <div className='Body-container'>
        <h1>Bar do Tião</h1>
        <img src="./images/bar.png" alt="" className='image-container'/>
        <h3>Produtos do bar:</h3>
        <ul>
            {produtosBar.map(produtos => (
                <li key={produtos.id}> {produtos.nome} - R$: {produtos.valor}</li>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default Bar