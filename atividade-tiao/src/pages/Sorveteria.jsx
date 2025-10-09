import './Sorveteria.css'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Sorveteria() {
    const {produtosSorveteria} = useContext(GlobalContext)

  return (
    <div>
        <Navbar />
        <div className='Body-container'>
        <h1>Sorveteria do Tião</h1>
        <img src="./images/sorveteria.png" alt="" className='image-container'/>
        <h3>Produtos Sorveteria:</h3>
        <ul>
            {produtosSorveteria.map(produtos =>(
                <li key={produtos.id}>{produtos.nome} - R$: {produtos.valor}</li>
            ))}
        </ul>
        
        </div>
    </div>
  )
}

export default Sorveteria