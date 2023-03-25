import { Play } from 'phosphor-react'
import {
  CountDownColon,
  CountDownContainer,
  FormContainer,
  HomeContainer,
  StartButton,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor='task'>I will be working on</label>
          <input id='task' type='text'></input>
          <label htmlFor=''>for</label>
          <input id='minutesAmount' type='number'></input>
          <label htmlFor=''>minutes.</label>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <CountDownColon>:</CountDownColon>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartButton disabled type='submit'>
          <Play size={24} />
          Start
        </StartButton>
      </form>
    </HomeContainer>
  )
}
