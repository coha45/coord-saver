import React from 'react'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom';
import { versions } from '../../data';

import { IoMdArrowRoundBack } from "react-icons/io";
import { TiWorld } from "react-icons/ti";
import { MdEdit } from 'react-icons/md';



const New = () => {
  const nav = useNavigate()

  const handleClick = () => {
    nav("/")
  }

  return (
    <>
      <button className="bg-[#272422] p-2 m-2 text-white absolute left-0 top-0" onClick={handleClick}>
        <IoMdArrowRoundBack />        
      </button>
      <div className="h-screen max-h-[600px] max-w-[650px] min-w-[650px] p-10 flex flex-col justify-center gap-2 items-center">
        <h2 className="font-xl">Create New World</h2>
        <form onSubmit={e => e.preventDefault()} className="flex flex-col items-center justify-center gap-2">
          <input type="text" placeholder="World Name" className="p-2 w-full border-2 border-black text-neutral-600" />
          <div className="w-full flex justify-between items-center gap-2">
            <label className="w-full flex flex-col">
              <h3 className="font-bold">Gamemode</h3>
              <select className="border-2 border-black w-full">
                <option value="survival">Survival</option>
                <option value="creative">Creative</option>
                <option value="adventure">Adventure</option>
              </select>
            </label>
            <label className="w-full flex flex-col">
              <h3 className="font-bold">Version</h3>
              <select className="border-2 border-black w-full">
                {
                  versions.map((version) => (
                    <option value={version}>
                      { version }
                    </option>
                  ))
                }
              </select>
            </label>
          </div>
          <label className="select-none">
            <input type="checkbox" />
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