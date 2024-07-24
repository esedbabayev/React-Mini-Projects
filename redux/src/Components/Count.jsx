import React from 'react'

const Count = (props) => {
  return (
    <span className='border-2 border-black rounded-md p-4'>{props.children}</span>
  )
}

export default Count