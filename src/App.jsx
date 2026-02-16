import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Main from './components/pages/Main'
import New from './components/pages/New'
import Edit from './components/pages/Edit'
import World from './classes/World'
const { ipcRenderer } = window.require ? window.require("electron") : {}

const App = () => {
  const [worlds, setWorlds] = useState([])
  const nav = useNavigate()

  async function addWorld(name, mode, version, modded, icon = "/assets/icn.jpg") {
    if (!name || !mode || !version || !icon) {
      return
    }
    const worldObj = new World(name, mode, version, modded, icon)
    if (ipcRenderer) {
      await ipcRenderer.invoke("update-data", worldObj) 
    }
    setWorlds(prevWorlds => [
      worldObj, 
      ...prevWorlds
    ])
  }

  async function delWorld(id) {
    const filtered = worlds.filter(world => world.id !== id)
    if (ipcRenderer) {
      await ipcRenderer.invoke("update-data", filtered) 
    }
    setWorlds(filtered)
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