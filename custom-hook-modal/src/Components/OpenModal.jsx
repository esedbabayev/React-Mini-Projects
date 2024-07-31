import React from 'react'
import useToggle from '../Hooks/useToggle'

const OpenModal = () => {
  const [isOpen, setIsOpen] = useToggle();

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  
  return (
    <div id="modalDiv">
      <button onClick={toggle}
        id="openModal"
        className="px-6 py-4 bg-[#2463EB] text-white hover:border-solid hover:border-2 rounded-xl hover:bg-white hover:text-[#2463EB] duration-200"
      >
        Open Modal
      </button>
    </div>
  )
}

export default OpenModal
