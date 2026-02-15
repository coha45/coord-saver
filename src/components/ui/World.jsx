import React from 'react'
import Button from './Button'
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { truncate } from '../../utils';



const World = ({ world, onDel }) => {
  const { id, name, mode, version, modded, icon } = world
  const nav = useNavigate()

  function handleDelete() {
    onDel(id)
  }

  function handleEdit() {
    nav(`/edit/${id}`)
  }

  return (
    <div className="w-full p-2 flex items-center justify-between border-2 border-neutral-950">
      <div className="flex justify-center items-center gap-2">
        <img className="w-20 aspect-square" src={icon} />
        <div>
          {/*<p className="text-xs">{ id }</p>*/}
          <h1 className="font-bold text-xl">{ truncate(name, 20) }</h1>
          <div className="flex gap-2 text-sm">
            <h2>{ version }</h2>
            <h2>{ mode }</h2>
            { modded && 
              <h2>Modded</h2>
            }
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <Button full size="sm" onClick={handleEdit}>
          <MdEdit />
          Edit
        </Button>
        <Button onClick={handleDelete} full variant="danger" size="sm">
          <FaRegTrashAlt />
          Delete
        </Button>
      </div>
    </div>
  )
}

export default World