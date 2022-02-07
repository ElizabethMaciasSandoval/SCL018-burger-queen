import React,{useContext} from 'react'
import menu from '../menu/menu.json';
import {ContextCart} from './../context/ContextCart';

const Menu = () => {
  const dishes = menu.dishes;
  const drinks = menu.drinks;
  const desserts = menu.desserts;
  const aggregates = menu.aggregates;
  const {addProductToCart} = useContext(ContextCart);
  return (
    <section>
      <section>
        <h1 className='font-amatic text-5xl'>Menu</h1>
        <div>
          {dishes.map((e,index)=> {
            return(
              <button key={index} onClick={()=>addProductToCart(e.id, e.name, e.price)} className='rounded-xl bg-gris-a/75 h-72 flex'>
                <img src={e.img} alt={e.name} className='h-72 w-80 rounded-xl'/>
                <h2 className='text-3xl font-bold'>{e.name}</h2>
                <p className='italic'>{e.description}</p>
                <p className='italic'>$ {e.price}</p>
              </button>
            )
          })}
        </div>
      </section>
    
      <section>
      <h1 className='font-amatic text-5xl'>Bebestibles</h1>
        <div>
          {drinks.map((e,index)=> {
            return(
              <button key={index} onClick={()=>addProductToCart(e.id, e.name, e.price)} className='rounded-xl bg-gris-a/75 h-72 flex'>
                <img src={e.img} alt={e.name} className='h-72 w-80 rounded-xl'/>
                <h2 className='text-3xl font-bold'>{e.name}</h2>
                <p className='italic'>{e.description}</p>
                <p className='italic'>$ {e.price}</p>
              </button>
            )
          })}
        </div>
      </section>

      <section>
      <h1 className='font-amatic text-5xl'>Postres</h1>
        <div>
          {desserts.map((e,index)=> {
            return(
              <button key={index} onClick={()=>addProductToCart(e.id, e.name, e.price)} className='rounded-xl bg-gris-a/75 h-72 flex'>
                <img src={e.img} alt={e.name} className='h-72 w-80 rounded-xl'/>
                <h2 className='text-3xl font-bold'>{e.name}</h2>
                <p className='italic'>{e.description}</p>
                <p className='italic'>$ {e.price}</p>
              </button>
            )
          })}
        </div>
      </section>
    
      <section>
      <h1 className='font-amatic text-5xl'>Agregados</h1>
        <div>
          {aggregates.map((e,index)=> {
            return(
              <button key={index} onClick={()=>addProductToCart(e.id, e.name, e.price)} className='rounded-xl bg-gris-a/75 h-72 flex'>
                <img src={e.img} alt={e.name} className='h-72 w-80 rounded-xl'/>
                <h2 className='text-3xl font-bold'>{e.name}</h2>
                <p className='italic'>{e.description}</p>
                <p className='italic'>$ {e.price}</p>
              </button>
            )
          })}
        </div>
      </section>
    </section>
  )
};

export default Menu





