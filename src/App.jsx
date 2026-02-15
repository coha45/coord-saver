import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { genId } from './utils'
import Main from './components/pages/Main'
import New from './components/pages/New'
import Edit from './components/pages/Edit'

const App = () => {
  const [worlds, setWorlds] = useState([])
  const nav = useNavigate()

  function addWorld(name, mode, version, modded, icon = "/assets/icn.jpg") {
    if (!name || !mode || !version || !icon) {
      console.log("hi")
      return
    }
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

  function delWorld(id) {
    setWorlds(prevWorlds => prevWorlds.filter(world => world.id !== id))
  }

  useEffect(() => {
    const listener = document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        nav("/")
      }
    })

    return () => removeEventListener("keypress", listener)
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Main worlds={worlds} delWorld={delWorld} />} />
        <Route path="/new" element={<New addWorld={addWorld} />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App