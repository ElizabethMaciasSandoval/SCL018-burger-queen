import React from 'react';
import menu from '../menu/menu.json';

const Menu = () => {
  const dishes = menu.dishes;
  const drinks = menu.drinks;
  const aggregates = menu.aggregates;
  return (
    <div>
      <section>
        <h1>Menu</h1>
        <div>
          {dishes.map((e,index)=> {
            return(
              <button key={index}>
                <img src={e.img} alt={e.name}/>
                <h2>{e.name}</h2>
                <p>{e.description}</p>
                <p>$ {e.price}</p>
              </button>
            )
          })}
        </div>
      </section>

      <section>
      <h1>Bebestible</h1>
        <div>
          {drinks.map((e,index)=> {
            return(
              <button key={index}>
                <img src={e.img} alt={e.name}/>
                <h2>{e.name}</h2>
                <p>{e.description}</p>
                <p>$ {e.price}</p>
              </button>
            )
          })}
        </div>
      </section>

      <section>
      <h1>Agregado</h1>
        <div>
          {aggregates.map((e,index)=> {
            return(
              <button key={index}>
                <img src={e.img} alt={e.name}/>
                <h2>{e.name}</h2>
                <p>{e.description}</p>
                <p>$ {e.price}</p>
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
};

export default Menu





