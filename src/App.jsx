import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { genId } from './utils'
import Main from './components/pages/Main'
import New from './components/pages/New'

const App = () => {
  const [worlds, setWorlds] = useState([])
  
  function addWorld(name, mode, version, icon, modded = true,) {
    if (!name || !mode || !version || !icon) return
    setWorlds(prevWorlds => [
      {
        id : genId(),
        name,
        mode,
        version,
        modded,
        icon
      }, 
      ...prevWorlds
    ])
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Main worlds={worlds} />} />
        <Route path="/new" element={<New addWorld={addWorld} />} />
      </Routes>
    </>
  )
}

export default App