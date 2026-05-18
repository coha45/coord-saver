import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../ui/Button'
import { isValidNum } from '../../utils'

const EditCoordinate = ({ coordinate, updateCoord }) => {
  const { register, handleSubmit, reset, formState : { errors }  } = useForm()
  useEffect(() => {
    reset({
      name : coordinate.name,
      x : coordinate.x,
      y : coordinate.y,
      z : coordinate.z,
      biome : coordinate.biome
    })
  }, [coordinate])

  function onSubmit({ name, x, y, z, biome }) {
    const newCoord = coordinate
    newCoord.name = name
    newCoord.x = x
    newCoord.y = y
    newCoord.z = z
    newCoord.biome = biome
    updateCoord(newCoord)
  }

  return (
    <div className="p-5 bg-white border-2 border-black">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center gap-2">
          <input type="text" { ...register("name", { required : "Name must not be empty", maxLength : 32 }) } placeholder="Coordinate Name" className="p-2 w-full border-2 border-black text-neutral-600" />
          <label className="">
            <span>
              Coordinate
            </span>
            <div className="flex">
              <input type="text" { ...register("x", { validate: (v) => isValidNum(v) || "Must be a number" }) } placeholder="X coordinate" className="p-2 border-2 border-black text-neutral-600" />
              <input type="text" { ...register("y", { validate: (v) => isValidNum(v) || "Must be a number" }) } placeholder="Y coordinate" className="p-2 border-2 border-black text-neutral-600" />
              <input type="text" { ...register("z", { validate: (v) => isValidNum(v) || "Must be a number" }) } placeholder="Z coordinate" className="p-2 border-2 border-black text-neutral-600" />
            </div>
          </label>
          <label>
            <input type="text" { ...register("biome") } placeholder="Biome" className="p-2 w-full border-2 border-black text-neutral-600" />
          </label>
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div> 
  )
}

export default EditCoordinate