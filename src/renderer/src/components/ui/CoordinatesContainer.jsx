import clsx from 'clsx'
import React from 'react'
import { isEmpty } from '../../utils'
import Coordinate from './Coordinate'

const CoordinatesContainer = ({ coordinates, onEdit, deleteCoord }) => {
  return (
    <div className={clsx("h-[300px] w-3/4 flex flex-col items-center border-2 border-neutral-300 overflow-y-scroll",
        isEmpty(coordinates) ? 
        "justify-center" :
        "justify-start p-2 gap-2"
    )}>
            {
                isEmpty(coordinates) ? 
                <p className="italic text-neutral-500 text-center w-3/4">
                    No coordinates yet. Start adding by pressing the "add" button.
                </p> : 
                coordinates.map(coord => (
                    <Coordinate key={coord.id} coord={coord} onEdit={onEdit} deleteCoord={deleteCoord}  />
                ))
            }
    </div>
  )
}

export default CoordinatesContainer