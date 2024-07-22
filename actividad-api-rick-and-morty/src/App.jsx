import { useState } from 'react'
import './css/App.css'
import './css/Style.css'

import Personajes from './pages/Personajes'
import Lugares from './pages/Ubicaciones'
import Episodios from './pages/Episodios'

function App() {
  const [seccion, setSeccion] = useState('Personajes');

  return (
    <>

    <h1>Rick & Morty</h1>

      <div className="nav-buttons">
        <button onClick={() => setSeccion('Personajes')}>Personajes</button>
        <button onClick={() => setSeccion('Ubicaciones')}>Ubicaciones</button>
        <button onClick={() => setSeccion('Episodios')}>Episodios</button>
      </div>

      <div className='Content'>
        {seccion == "Personajes" && <Personajes />}
        {seccion == "Ubicaciones" && <Ubicaciones />}
        {seccion == "Episodios" && <Episodios />}
      </div> 


    </>
  )
}

export default App
