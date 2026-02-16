import React, { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom';
import { versions } from '../../data';
import { useForm } from 'react-hook-form';

import { IoMdArrowRoundBack } from "react-icons/io";
import { TiWorld } from "react-icons/ti";
import { MdEdit } from 'react-icons/md';
import BackBtn from '../ui/BackBtn';



const New = ({ addWorld }) => {
  const nav = useNavigate()
  const [file, setFile] = useState("")
  const  { register, handleSubmit, watch, formState : { errors } } = useForm()

  function handleCreate(data) {
    const { name, mode, version, modded } = data
    addWorld(name, mode, version, modded)
    nav("/")
  }

  return (
    <>
      <BackBtn />
      <div className="h-screen max-h-[600px] max-w-[650px] min-w-[650px] p-10 flex flex-col justify-center gap-2 items-center">
        <h2 className="text-4xl mb-6 font-mcTen">Create New World</h2>
        <form onSubmit={handleSubmit(handleCreate)} className="flex flex-col items-center justify-center gap-2">
          <div className="flex">
            <label className="w-16 aspect-square bg-neutral-300">
              {/* <input type="file" className="hidden" accept="image/png, image/jpeg" /> */} 
            </label>
            <input { ...register("name", { required : "Name must not be empty", maxLength : 32 }) } type="text" placeholder="World Name" className="p-2 w-full border-2 border-black text-neutral-600" />
          </div>
          <div className="w-full flex justify-between items-center gap-2">
            <label className="w-full flex flex-col">
              <h3 className="font-bold">Gamemode</h3>
              <select { ...register("mode") }  className="border-2 border-black w-full">
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
          <div className="flex gap-2">
            <Button type="submit">
              <TiWorld />
              Create New World
            </Button>
            <Button type="submit">
              <MdEdit />
              Create And Edit
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default New