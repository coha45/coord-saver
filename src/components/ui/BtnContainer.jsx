import React from 'react'
import Button from './Button'
import { TbFileImport } from 'react-icons/tb'
import { IoMdAdd } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const BtnContainer = () => {
  const nav = useNavigate()
  const onAdd = () => {
    nav("/new")
  }
  return (
    <div className="flex items-center justify-center gap-2 w-full">
        <Button variant="success" full onClick={onAdd}>
            <IoMdAdd />
            Add World
        </ Button>
        <Button full>
            <TbFileImport />
            Import Worlds
        </ Button>
    </div>
  )
}

export default BtnContainer