import { HeaderContainer } from './styles'
import reactTimerLogo from '../../assets/react-timer-logo.svg'
import { Timer, Scroll } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={reactTimerLogo}
        alt='Logo composed of two overlapping triangles in shades of green with the tips pointing down to the left'
      />
      <nav>
        <a href=''>
          <Timer size={24} />
        </a>
        <a href=''>
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
