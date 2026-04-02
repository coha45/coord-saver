import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../ui/Button'

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
    <div className="p-5 bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" { ...register("name", { required : "Name must not be empty", maxLength : 32 }) } placeholder="Coordinate Name" className="p-2 w-full border-2 border-black text-neutral-600" />
        <input type="text" { ...register("x") } placeholder="X coordinate" className="p-2 w-full border-2 border-black text-neutral-600" />
        <input type="text" { ...register("y") } placeholder="Y coordinate" className="p-2 w-full border-2 border-black text-neutral-600" />
        <input type="text" { ...register("z") } placeholder="Z coordinate" className="p-2 w-full border-2 border-black text-neutral-600" />
        <input type="text" { ...register("biome") } placeholder="Biome" className="p-2 w-full border-2 border-black text-neutral-600" />
        <Button type="submit">Submit</Button>
      </form>
    </div> 
  )
}

export default EditCoordinate