import ButtonHome from '../ButtonHome'
import TakeOrder from '../TakeOrder';
import { useState } from 'react/cjs/react.development'

const ViewWaiter = () => {
  const [order,setOrder] = useState(true);
  return (
    <div>
      <nav>
      <button onClick={() => setOrder(true)} className='bg-gris-b rounded-md'>Tomar pedido</button>
      <button onClick={() => setOrder(false)}className='bg-gris-b rounded-md'>Estado del pedido</button>
      <ButtonHome/>
      </nav>
      <>
      {order === true ? <TakeOrder/> : <p>Estado de pedidos en construcción</p>}
      </>
    </div>
  )
}

export default ViewWaiter
