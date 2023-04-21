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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().trim().min(1, 'Inform the task name'),
  minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }
    // when saving data that depends on the previous state
    setCycles((previousCycles) => [...previousCycles, newCycle])
    setActiveCycleId(id)

    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action=''>
        <FormContainer>
          <label htmlFor='task'>I will be working on</label>
          <TaskInput
            id='task'
            placeholder='Give a name to your task or project'
            type='text'
            list='task-suggesitons'
            {...register('task')}
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
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <label htmlFor=''>minutes.</label>
        </FormContainer>

        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <CountDownColon>:</CountDownColon>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownContainer>

        <StartButton disabled={isSubmitDisabled} type='submit'>
          <Play size={24} />
          Start
        </StartButton>
      </form>
    </HomeContainer>
  )
}
