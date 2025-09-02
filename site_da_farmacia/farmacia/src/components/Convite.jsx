import './Convite.css'

function ConfimarPresenca(){
  alert ("Sua presença foi confirmada com sucesso!")
}

function Convite() {
  return (
    <div className='convite-container'>
        <h1>Convite Especial!!!</h1>
        <p>
            Temos a alegria de convidar você para a inauguração da nossa farmácia! Um espaço preparado com muito carinho para cuidar da sua saúde e bem-estar. Teremos brindes e muito mais para você, sua família e seus amigos!
        </p>

        <p>Endereço: Rua da farmacia</p>
        <p>Data: 31/11/2025</p>
        <p>Horário: 17:30</p>

        <p>
            Venha conhecer nossas instalações, aproveitar promoções exclusivas de inauguração e celebrar com a gente esse novo começo com a gente!
        </p>
        <p>
            Sua presença é muito importante!
        </p>

        <img src="./images/farmarcia-camisetas.png"className='imagem-camisetas' alt="" />
        <img src="./images/farmarcia-cartoes.png" className='imagem-cartoes'alt="" />
        <img src="./images/farmarcia-placa.png" className='imagem-placa' alt="" />

        <button onClick={ConfimarPresenca} className='button-convite'>Confirmar presença</button>
    </div>
  )
}

export default Convite