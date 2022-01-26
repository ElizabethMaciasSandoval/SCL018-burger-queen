import React from 'react'
import { Link } from "react-router-dom";

const ViewHome = () => {
  return (
    <div>
      <h2>Meserx</h2>
      <Link to='/meserx'>
        <img src="https://i.imgur.com/PKsb9oa.jpg" alt="Meserx" />
      </Link>
      <h2>Cocinerx</h2>
      <Link to='/cocinerx'>
        <img src="https://i.imgur.com/0v57uQu.jpg" alt="Cocinerx" />
      </Link>
    </div>
  )
}

export default ViewHome
