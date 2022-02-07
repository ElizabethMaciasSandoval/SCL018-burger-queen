import React,{useContext} from 'react'
import {ContextCart} from './../context/ContextCart';

const Cart = () => {
  const {cart} = useContext(ContextCart);
  return (
    <div>
      <h1>Resumen del Pedido</h1>
      {cart.length > 0 ? 
        cart.map((product,index) => {
          return(
            <section key={index}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <p>{product.quantity}</p>
              <button>Disminuir</button>
              <button>Aumentar</button>
              <button>Eliminar</button>
            </section>
          );
        })
      : 
        <p>carrito vacio</p> 
      }
    </div>
  )
}

export default Cart;
