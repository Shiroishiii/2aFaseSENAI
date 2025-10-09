import './Borracharia.css'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'

function Borracharia() {
    const {servicosBorracharia} = useContext(GlobalContext)

  return (
    <div>
        <Navbar />
        <div className='Body-container'>
        <h1>Borracharia do Tião</h1>
        <img src="./images/materiais.png" alt="" className='image-container'/>
        <h3>Serviços disponíveis:</h3>
        <ul>
            {servicosBorracharia.map(servico => (
                <li key={servico.id}>{servico.nome} - R$: {servico.valor.toFixed(2)}</li>
            ))} 
        </ul>

        </div>
    </div>
  )
}

export default Borracharia