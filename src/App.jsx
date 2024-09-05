import './App.css'
import {Button} from './Components/Button.jsx'

function exibirMensagem(){
  alert("vai Curintiaaaaaaa")
}

function App() {
  
  return (
    <>
      <Button texto="Ver meu Time" mensagem={exibirMensagem}/>
    </>
  )
}

export default App
