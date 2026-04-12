import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Main from './components/pages/Main'
import New from './components/pages/New'
import Edit from './components/pages/Edit'
import World from './classes/World'
import Modal from './components/ui/Modal'
const { ipcRenderer } = window.require ? window.require("electron") : {}

const App = () => {
  const [worlds, setWorlds] = useState([])
  const nav = useNavigate()
  const modalRef = useRef()
  /*
  useEffect(() => {
    ipcRenderer.invoke("load-data-from-json").then(data => {
      console.log(data)
      setWorlds([data])
    }).catch(err => console.err(err))
  }, []) */

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

    return worldObj.id
  }

  function getWorld(id) {
    return worlds.filter(world => world.id === id)
  }

  async function updateWorld(id, newWorld) {
    for(let i = 0; i < worlds.length; i++) {
      if (worlds[i].id === id) {
        const filtered = worlds.filter(world => world.id !== id)
        setWorlds([...filtered, newWorld])
        if (ipcRenderer) {
          await ipcRenderer.invoke("update-data", filtered) 
        }
        return
      }
    }
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
      if (e.key === "Escape" && !modalRef.current.isOpen()) {
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
        <Route path="/edit/:id" element={<Edit getWorld={getWorld} updateWorld={updateWorld} ref={modalRef} />} />
      </Routes>
    </>
  )
}

export default App