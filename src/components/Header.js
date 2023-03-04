// Header.js
import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
