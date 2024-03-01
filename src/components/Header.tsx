import menuIcon from '../assets/icons/menu.svg'
import logoIcon from '../assets/logo.svg'
import cartIcon from '../assets/icons/cart.svg'
import profileIcon from '../assets/icons/profile.svg'
import { useEffect, useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navBarItems = [
    {
      name: 'Início',
      path: '#'
    },
    {
      name: 'Loja',
      path: '#'
    },
    {
      name: 'Sobre nós',
      path: '#'
    },
    {
      name: 'Contato',
      path: '#'
    },
  ]

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    if(menuOpen) {
      document.body.style.overflowY = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [menuOpen])

  return (
    <header className='flex items-center justify-center w-full p-3'>
      <div className='responsive-container w-full flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <img className='cursor-pointer lg:hidden' onClick={handleMenuOpen} src={menuIcon} alt='Menu' />
          <img className='w-28 cursor-pointer' src={logoIcon} alt='Logotipo do Greenify' />
        </div>
        <nav className={`${menuOpen ? 'flex' : 'hidden'} gap-4 absolute top-16 left-1/2 -translate-x-1/2 flex-col items-center bg-white w-4/5 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] rounded-lg py-6 px-4 z-10 lg:flex lg:shadow-none lg:bg-transparent lg:flex-row lg:gap-12 lg:translate-x-0 lg:static lg:w-auto`}>
          {navBarItems.map((item, index) => (
            <a className='font-secondary hover-link-animation' onClick={() => setMenuOpen(false)} href={item.path} key={index}>{item.name}</a>
          ))}
        </nav>
        <div className='flex gap-4'>
          <img className='cursor-pointer' src={cartIcon} alt='Sacola de compras' />
          <img className='w-8 cursor-pointer' src={profileIcon} alt='Perfil do usuário' />
        </div>
      </div>
    </header>
  )
}