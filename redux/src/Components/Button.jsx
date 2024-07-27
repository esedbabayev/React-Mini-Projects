import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-black p-4 rounded-lg hover:bg-blue-700 text-white font-bold'>
      {props.children}
    </button>
  )
}

export default Button
