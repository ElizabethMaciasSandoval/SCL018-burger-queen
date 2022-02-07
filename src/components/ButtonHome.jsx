import React from 'react'
import { Link } from "react-router-dom";

const ButtonHome = () => {
  return (
    <Link to='/'>
      <button className='bg-gris-b rounded-md'>
        Volver
      </button>
    </Link>
  )
}

export default ButtonHome