import React from 'react'
import { NavItems } from '../constants'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4'>
      <nav>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src="logo.svg" alt="trusted ideas logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'> <span>Trusted</span> <span>Ideas</span></p>
        </Link>

        <ul>

          {NavItems.map((items) => (
            <li key={items.id}>
              <a href={`/${items.id}`}>{items.name}</a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  )
}

export default Header
