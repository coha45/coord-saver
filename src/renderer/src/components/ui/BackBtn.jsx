import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const BackBtn = ({ onClick = () => {} }) => {
  const nav = useNavigate()

  function handleClick() {
    onClick()
    nav("/")
  }

  return (
    <button className="bg-[#272422] p-2 m-2 text-white absolute left-0 top-0" onClick={handleClick}>
        <IoMdArrowRoundBack />        
    </button>
  )
}

export default BackBtn