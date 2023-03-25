import { HeaderContainer } from './styles'
import reactTimerLogo from '../../assets/react-timer-logo.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={reactTimerLogo}
        alt='Logo composed of two overlapping triangles in shades of green with the tips pointing down to the left'
      />
      <nav>
        <NavLink to='/' title='Timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history' title='History'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
