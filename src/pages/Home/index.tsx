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

// interface NewCycleFormData {
//  task: string
//  minutesAmount: number
// }

const newCycleFormValidationSchema = zod.object({
  task: zod.string().trim().min(1, 'Inform the task name'),
  minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: any): any {
    console.log(data)
    reset()
  }

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
          <span>0</span>
          <span>0</span>
          <CountDownColon>:</CountDownColon>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartButton disabled={isSubmitDisabled} type='submit'>
          <Play size={24} />
          Start
        </StartButton>
      </form>
    </HomeContainer>
  )
}
