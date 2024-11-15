import { Formulario } from './components/Formulario'
import sunsucaImg from './assets/sunsuca.png';
import './App.css'

function App() {

  return (
    <div className="App">
      <img src={sunsucaImg} alt="" className="imagen"/>
      <Formulario />
    </div>
  )
}

export default App
