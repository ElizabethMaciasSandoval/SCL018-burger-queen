import React from 'react'
import { Link } from "react-router-dom";

const ViewHome = () => {
  return (
    <>
      <nav className='bg-gris-a flex'>
        <img src="https://i.imgur.com/3TDNL4N.png" alt="Logo Restaurant" className='w-1/5' />
        <h1 className='font-amatic text-9xl'>Un riconcito de Perú</h1>
      </nav>
      <section className='flex'>
        <h2 className='font-amatic text-5xl'>Meserx</h2>
        <Link to='/meserx'>
          <img src="https://i.imgur.com/PKsb9oa.jpg" alt="Meserx" className='h-52 w-80 rounded-xl'/>
        </Link>
        <h2 className='font-amatic text-5xl'>Cocinerx</h2>
        <Link to='/cocinerx'>
          <img src="https://i.imgur.com/0v57uQu.jpg" alt="Cocinerx" className='h-52 w-80 rounded-xl'/>
        </Link>
      </section>
    </>
  )
}

export default ViewHome
