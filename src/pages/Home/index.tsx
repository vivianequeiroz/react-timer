import { Play } from 'phosphor-react'
import {
  CountDownColon,
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesInput,
  StartButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor='task'>I will be working on</label>
          <TaskInput
            id='task'
            placeholder='Give a name to your task or project'
            type='text'
          />
          <label htmlFor=''>for</label>
          <MinutesInput id='minutesAmount' placeholder='00' type='number' />
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
