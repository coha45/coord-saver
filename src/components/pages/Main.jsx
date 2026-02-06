import React, { useState } from 'react'
import Header from '../ui/Header'
import WorldsContainer from '../ui/WorldsContainer';
import BtnContainer from '../ui/BtnContainer';

const Main = ({ worlds, addWorld }) => {
  return (
    <div className="h-screen max-h-[600px] max-w-[650px] min-w-[650px] p-10 flex flex-col justify-center gap-2 items-center">
        <Header />
        <div className="w-full flex flex-col items-center justify-center gap-2">  
          <WorldsContainer worlds={worlds} />
          <BtnContainer onAdd={addWorld} />
        </div>
    </div>
  )
}

export default Main