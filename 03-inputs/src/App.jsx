
import './App.css'
import Avisador from './components/Avisador'
import Demo from './components/Demo'
import Temperatura from './components/Temperatura'

function App() {

  return (
    <>
      <h1>Inputs</h1>
      <Demo />

      <h1>Exercícios (inputs controlados)</h1>
      <Avisador />
      <Temperatura />
    </>
  )
}

export default App
