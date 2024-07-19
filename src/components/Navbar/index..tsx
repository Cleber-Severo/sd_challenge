import React from 'react'

import Logo from '../../assets/logo.png'
// import './Navbar.scss'
import styled from 'styled-components'


const MainNav = styled.nav`
    justify-content: space-between;
    padding-top: 10px;
    display: flex;
`

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
`

const NavListItem = styled.li`
  color: ${props => props.theme.color.primary.main};
  font-weight: 500;
  font-size: 16px;
  border-bottom: 1px solid transparent;
  transition: all .25s ease;
  
  &:hover {
      cursor: pointer;
      border-color: ${props => props.theme.color.primary.main};
  }
`

export const Navbar = () => {
  return (
    <MainNav>
          <img src={Logo} alt="logo" />
        <NavList>
            <NavListItem>Como fazer</NavListItem>
            /
            <NavListItem>Ofertas</NavListItem>
            /
            <NavListItem>Depoimentos</NavListItem>
            /
            <NavListItem>Vídeos</NavListItem>
            /
            <NavListItem>Meu Carrinho</NavListItem>
        </NavList>
    </MainNav>
  )
}
