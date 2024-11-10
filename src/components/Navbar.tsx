import React from 'react'

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Syed</div>
            <ul className='flex gap-10 lg:gap-16 md:flex'>
              <li className='menuLink'><a href="#hero">Home</a></li>
              <li className='menuLink'><a href="#about">About</a></li>
              <li className='menuLink'><a href="#projects">Projects</a></li>
              <li className='menuLink'><a href="#skills">Skills</a></li>
              <li className='menuLink'><a href="#contact">Contact</a></li>
            </ul>
          
        </div>

    </div>
  )
}

export default Navbar;