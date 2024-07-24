import React from 'react'

const Container = (props) => {
  return (
    <div className='container max-w-[1920px] mx-auto'>
      {props.children}
    </div>
  )
}

export default Container
