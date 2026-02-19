import React, { useEffect, useState } from 'react'

import BackBtn from '../ui/BackBtn'
import { useParams } from 'react-router-dom'
import { versions } from '../../data'
import { useForm } from 'react-hook-form'

const Edit = ({ getWorld }) => {
  const { id } = useParams()
  const [curWorld, setCurWorld] = useState(null)
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

  return (
    <>
        <BackBtn />
        <div className="h-screen max-h-[600px] max-w-[650px] min-w-[650px] p-10 flex flex-col justify-center gap-2 items-center">
          <h2 className="text-4xl mb-6 font-mcTen">Create New World</h2>
          <div className="">
            <form className="flex flex-col items-center justify-center gap-2">
              <div className="flex">
                <input type="text" { ...register("name", { required : "Name must not be empty", maxLength : 32 }) } placeholder="World Name" className="p-2 w-full border-2 border-black text-neutral-600" />
              </div>
              <div className="w-full flex justify-between items-center gap-2">
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
              </div>
              <label className="select-none text-xl self-start">
                <input { ...register("modded") } type="checkbox" />
                Modded
              </label>
            </form>
          </div>
        </div>
    </>
  )
}

export default Edit