import React, { useEffect, useState } from 'react'

import BackBtn from '../ui/BackBtn'
import Button from '../ui/Button'
import { useParams } from 'react-router-dom'
import { versions } from '../../data'
import { useForm } from 'react-hook-form'
import CoordinatesContainer from '../ui/CoordinatesContainer'
import Coordinate from '../../classes/Coordinate'

import { IoMdAdd } from 'react-icons/io'
import { IoIosSave } from "react-icons/io";


const Edit = ({ getWorld }) => {
  const { id } = useParams()
  const [curWorld, setCurWorld] = useState(null)
  const [coordinates, setCoordinates] = useState([])
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
  }, [curWorld])

  function handleAdd() {
    const coordObj = new Coordinate("Idk", 123, 304, -32, "Biome")
    setCoordinates(prevCoords => [...prevCoords, coordObj])
  }

  return (
    <>
        <BackBtn />
        <div className="h-screen max-h-[600px] max-w-[750px] min-w-[650px] p-10 flex flex-col justify-center gap-2 items-center">
          <h2 className="text-4xl mb-6 font-mcTen">Edit Coordinates</h2>
          <div className="flex items-center justify-center gap-4">
            <form className="flex flex-col items-center justify-center gap-2 self-start">
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
              
            </form>
            <CoordinatesContainer coordinates={coordinates} />
          </div>
          <span className="mt-2 w-3/4 flex justify-center items-center gap-2">
            <Button full>
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