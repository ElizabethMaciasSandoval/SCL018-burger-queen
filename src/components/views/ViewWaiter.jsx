import React from 'react'
import ButtonHome from '../ButtonHome'
import Menu from '../Menu'

const ViewWaiter = () => {
  return (
    <div>
      <nav>
      <button>Tomar pedido</button>
      <button>Estado del pedido</button>
      <ButtonHome/>
      </nav>
      <input type="text" placeholder='Ingresa el numero de la mesa'/>
      <input type="text" placeholder='Ingresa el nombre del cliente'/>
      <Menu/>
    </div>
  )
}

export default ViewWaiter
