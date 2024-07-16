import React from 'react'

import Logo from '../../assets/logo.png'
import './Navbar.scss'


export const Navbar = () => {
  return (
    <nav className='navbar'>
          <img src={Logo} alt="logo" />
        <ul>
            <li>Como fazer</li>
            /
            <li>Ofertas</li>
            /
            <li>Depoimentos</li>
            /
            <li>Vídeos</li>
            /
            <li>Meu Carrinho</li>
        </ul>
    </nav>
  )
}
