import React from 'react'
import World from './World'
import clsx from 'clsx'
import { isEmpty } from '../../utils'

const WorldsContainer = ({ worlds = [] }) => {
  return (
    <div className={clsx("h-[300px] w-full flex flex-col items-center border-2 border-neutral-300 overflow-y-scroll",
      isEmpty(worlds) ? 
      "justify-center" :
      "justify-start p-2 gap-2"
    )}>
        {
            isEmpty(worlds) ? 
            <p className="italic text-neutral-500 text-center w-3/4">
                Press "Add world" to add worlds or import from an existing database.
            </p> : 
            worlds.map((world) => (
              <World key={world.id} world={world} />
            ))
        }
    </div>
  )
}

export default WorldsContainer