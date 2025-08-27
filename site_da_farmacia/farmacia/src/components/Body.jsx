import './Body.css'
import Convite from './Convite'
import Texto from './Texto'
import Titulo from './Titulo'

function Body() {
  return (
    <div className='body-container'>
        <Titulo />
        <Texto />
            <img src="./images/farmacia-logo-completa.png" className='imagem-container' alt="imagem da logo completa" />
        <Convite />
    </div>
  )
}

export default Body