import './Home.css'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
        <Navbar />
        <div className='Body-container'>
            <h1>Bem-vindo ao universo de negócios do Tião</h1>
            <h5>Aqui você encontra tudo que o Tião oferece: qualidade, confiança e diversidade</h5>
            <h2>Negócios do Tião:</h2>
            <h3>Borracharia do Tião</h3>
            <img src="./images/materiais.png" alt="" className='image-container'/>
            <p>Seu carro merece cuidado de quem entende! Na Borracharia do Tião, você encontra serviços rápidos e eficientes para consertar pneus, alinhamento e balanceamento. Atendimento de confiança para você rodar tranquilo.</p>
            <h3>Bar do Tião</h3>
            <img src="./images/bar.png" alt="" className='image-container'/>
            <p>O ponto de encontro perfeito para relaxar e se divertir! No Bar do Tião, você aproveita um ambiente aconchegante, com bebidas geladas, petiscos saborosos e aquele clima amigável que só o Tião sabe proporcionar.</p>
            ingredientes
            <h3>Sorveteria do Tião</h3>
            <img src="./images/sorveteria.png" alt="" className='image-container'/>
            <p>Refresque seus dias com os deliciosos sorvetes da Sorveteria do Tião! Sabores variados, feitos com  ingredientes selecionados para garantir frescor e sabor a cada colherada. Venha se deliciar!</p>
        </div>
        <footer className='footer-container'>
            <hr />
            <p>Quer saber mais sobre cada negócio do Tião? Explore as páginas e fique por dentro das novidades, promoções e muito mais!</p>
            <p>Siga o Tião nas redes sociais e acompanhe tudo de perto:</p>
            <p> <img src="./images/instagram.svg" alt="" />Instagram: @tiao.oficial</p>
            <p> <img src="./images/facebook.svg" alt="" />Facebook: /TiaoNegocios</p>
            <p> <img src="./images/whatsapp.svg" alt="" />WhatsApp: (45) 8642-99401</p>
        </footer>
    </div>
  )
}

export default Home