import React from 'react'
import { Link } from "react-router-dom";

const ButtonHome = () => {
  return (
    <Link to='/'>
      <button>
        Volver
      </button>
    </Link>
  )
}

export default ButtonHome
