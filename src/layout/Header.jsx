import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Bars, Logo, Instagram } from '../lib/icons'

const Header = () => {
  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  useEffect(() => {
    const logo = document.querySelector('.logo-main')

    window.onscroll = () => {
      if (window.scrollY > 0) {
        logo.classList.add('text-xs')
      } else {
        logo.classList.remove('text-xs')
      }
    }
  }, [])

  return (
    <div className='navbar w-full px-4 bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label
            className='cursor-pointer hover:text-primary text-secondary'
            onClick={openMenu}
          >
            <Bars />
          </label>
        </div>
      </div>
      <div className='navbar-center text-primary logo-main transition-all'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className='navbar-end text-secondary'>
        <a
          href='https://www.instagram.com/imltenis/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-primary'
        >
          <Instagram />
        </a>
      </div>
    </div>
  )
}

export default Header
