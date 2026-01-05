import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className='w-full bg-black text-white flex flex-row'>
        <ul className='w-full flex gap-7 h-[48px] items-center justify-center'>
            <li><a className='text-gray' href="#home">Home</a></li>
            <li><a className='text-gray' href="#contact">Contact</a></li>
            <li><a className='text-gray' href="#projects">Projects</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
