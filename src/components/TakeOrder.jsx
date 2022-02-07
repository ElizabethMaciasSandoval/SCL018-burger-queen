import React from 'react';
import Menu from './Menu';
import Cart from './Cart';

const TakeOrder = () =>{ 
  return (
  <div>
    <nav>
      <input type="text" placeholder='Ingresa el numero de la mesa' className='bg-gris-b rounded-md'/>
      <input type="text" placeholder='Ingresa el nombre del cliente' className='bg-gris-b rounded-md'/>
    </nav>
    <Menu />
    <Cart />
  </div>)
}

export default TakeOrder;
