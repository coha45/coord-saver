import React, { useEffect } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import Button from './Button'

const Coordinate = ({ coord }) => {
  return (
    <div className="w-full p-2 flex items-center justify-between border-2 border-neutral-950">
      <h1 className="font-semibold text-xl">{ coord.name }</h1>
      <div className="flex flex-col">
        <h2 className="font-bold text-sm">Coordinates:</h2>
        <ul className="flex gap-2">
          <li className="flex">
            <p>X:</p>
            { coord.x }
          </li>
          <li className="flex">
            <p>Y:</p>
            { coord.y }
          </li>
          <li className="flex">
            <p>Z:</p>
            { coord.z }
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-sm">Biome:</h2>
        <p>{ coord.biome }</p>
      </div>
      <div className="flex flex-col">
        <Button icon>
          <MdEdit />
        </Button>
        <Button icon variant="danger">  
          <FaRegTrashAlt />
        </Button>
      </div>
    </div>
  )
}

export default Coordinate