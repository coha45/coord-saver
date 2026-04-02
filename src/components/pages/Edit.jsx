import React, { useEffect, useRef, useState } from 'react'

import BackBtn from '../ui/BackBtn'
import Button from '../ui/Button'
import { useParams, useNavigate } from 'react-router-dom'
import { versions } from '../../data'
import { useForm } from 'react-hook-form'
import CoordinatesContainer from '../ui/CoordinatesContainer'
import Coordinate from '../../classes/Coordinate'

import { IoMdAdd } from 'react-icons/io'
import { IoIosSave } from "react-icons/io";
import Modal from '../ui/Modal'
import EditCoordinate from './EditCoordinate'

const Edit = ({ getWorld = () => {}, updateWorld = () => {}, ref : modalRef }) => {
  const navigate = useNavigate()

  const { id } = useParams()
  const [curWorld, setCurWorld] = useState(null)
  const [coordinates, setCoordinates] = useState([])
  const [curCoord, setCurCoord] = useState(null)
  const submitRef = useRef()
  const  { register, handleSubmit, reset, formState : { errors } } = useForm()

  useEffect(() => {
    const world = getWorld(id)[0]
    reset({
      name : world.name,
      mode : world.mode,
      version : world.version,
      modded : world.modded
    })
    setCurWorld(world)
    setCoordinates(world.coordinates)
  }, [curWorld])

  function handleAdd() {
    const coordObj = new Coordinate("Idk", 123, 304, -32, "Biome")
    setCoordinates(prevCoords => [...prevCoords, coordObj])
  }

  function updateCoord(newCoord) {
    const filtered = coordinates.filter(coord => coord.id !== newCoord.id)
    for(let i = 0; i < coordinates.length; i++) {
      if (newCoord.id === coordinates[i].id) {
        setCoordinates([newCoord, ...filtered])
        break
      }
    }
    modalRef.current.close()
  }
  
  function deleteCoord(id) {
    setCoordinates(prevCoords => prevCoords.filter(coord => coord.id !== id))
  }

  function onEdit(coord) {
    setCurCoord(coord)
    modalRef.current.open()
  }

  function onSubmit({ name, mode, version, modded }) {
    const newWorld = curWorld
    newWorld.name = name
    newWorld.mode = mode
    newWorld.version = version
    newWorld.modded = modded
    newWorld.coordinates = coordinates
    navigate("/")
    updateWorld(newWorld)
  }

  return (
    <>
        <Modal ref={modalRef}>
          {
            curCoord ? 
            <EditCoordinate onUpdate={() => modalRef.current.close()} coordinate={curCoord} updateCoord={updateCoord} /> :
            <p>Nothing here.</p>
          }
        </Modal>
        <BackBtn />
        <div className="h-screen max-h-[600px] max-w-[750px] min-w-[650px] p-10 flex flex-col justify-center gap-2 items-center">
          <h2 className="text-4xl mb-6 font-mcTen">Edit Coordinates</h2>
          <div className="flex items-center justify-center gap-4">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-2 self-start">
              <input type="text" { ...register("name", { required : "Name must not be empty", maxLength : 32 }) } placeholder="World Name" className="p-2 w-full border-2 border-black text-neutral-600" />
              <label className="w-full flex flex-col">
                <h3 className="font-bold">Gamemode</h3>
                <select { ...register("mode") } className="border-2 border-black w-full">
                  <option value="survival">Survival</option>
                  <option value="creative">Creative</option>
                  <option value="adventure">Adventure</option>
                  <option value="hardcore">Hardcore</option>
                </select>
              </label>
              <label className="w-full flex flex-col">
                <h3 className="font-bold">Version</h3>
                <select { ...register("version") } className="border-2 border-black w-full">
                  {
                    versions.map((version) => (
                      <option value={version} key={version}>
                        { version }
                      </option>
                    ))
                  }
                </select>
              </label>
              <label className="select-none text-xl self-start">
                <input { ...register("modded") } type="checkbox" />
                Modded
              </label>
              <button type="submit" ref={submitRef}></button>
            </form>
            <CoordinatesContainer coordinates={coordinates} onEdit={onEdit} deleteCoord={deleteCoord} />
          </div>
          <span className="mt-2 w-3/4 flex justify-center items-center gap-2">
            <Button full onClick={() => submitRef.current.click()}>
              <IoIosSave />
              Save
            </Button>
            <Button full variant="success" onClick={handleAdd}>
              <IoMdAdd />
              Add
            </Button>
          </span>
        </div>
    </>
  )
}

export default Edit