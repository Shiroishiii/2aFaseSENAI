import React from 'react'

function Titulo2(props) {
  return (
    <h2 className='Titulo2-container'>
        {props.texto}
        {props.emoji}
    </h2>
  )
}

export default Titulo2