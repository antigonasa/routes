import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='page-container not-found'>
        <h2>404</h2>
        <p>Sorry, this page doesn't exist!</p>
        <Link to='/'>Go back to homepage</Link>
    </div>
  )
}

export default NotFound