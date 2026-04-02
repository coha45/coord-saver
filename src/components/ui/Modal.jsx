import React, { useEffect, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, ref }) => {
  const modalRef = useRef()

  useImperativeHandle(ref, () => {
      return {
        open() {
          modalRef.current.showModal()
        },
        close() {
          modalRef.current.close()
        },
        isOpen() {
          return modalRef.current.open  
        }
      }
  }, [])

  return createPortal(
    <dialog ref={modalRef}>
        { children }
    </dialog>,
    document.body
  )
}

export default Modal