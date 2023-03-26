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
            list='task-suggesitons'
          />

          <datalist id='task-suggesitons'>
            <option value='Study react' />
            <option value='Clean desk' />
            <option value='Wash clothes' />
          </datalist>
          <label htmlFor=''>for</label>
          <MinutesInput
            id='minutesAmount'
            min={1}
            max={60}
            placeholder='00'
            type='number'
          />
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
