import { useState } from 'react'
import './css/App.css'
import './css/Style.css'

import Personajes from './components/Personajes'
import Lugares from './components/Lugares'
import Episodios from './components/Episodios'

function App() {
  const [seccion, setSeccion] = useState('Personajes');

  return (
    <>

    <h1>Rick & Morty</h1>

      <div className="nav-buttons">
        <button onClick={() => setSeccion('Personajes')}>Personajes</button>
        <button onClick={() => setSeccion('Lugares')}>Lugares</button>
        <button onClick={() => setSeccion('Episodios')}>Episodios</button>
      </div>

      <main className='Content'>
        {seccion == "Personajes" && <Personajes />}
        {seccion == "Lugares" && <Lugares />}
        {seccion == "Episodios" && <Episodios />}
      </main> 


    </>
  )
}

export default App
