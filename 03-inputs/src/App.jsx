
import './App.css'
import Avisador from './components/Avisador'
import Demo from './components/Demo'
import Distancia from './components/Distancia'
import Imc from './components/Imc'
import Moedas from './components/Moedas'
import Temperatura from './components/Temperatura'

function App() {

  return (
    <>
      <h1>Inputs</h1>
      <Demo />

      <h1>Exercícios (inputs controlados)</h1>
      <Avisador />
      <Temperatura />
      <Moedas />
      <Distancia />
      <Imc />
    </>
  )
}

export default App
