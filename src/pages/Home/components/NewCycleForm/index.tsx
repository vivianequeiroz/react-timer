import { useFormContext } from 'react-hook-form'
import { FormContainer, TaskInput, MinutesInput } from './styles'

import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CycleContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor='task'>I will be working on</label>
      <TaskInput
        id='task'
        placeholder='Give a name to your task or project'
        type='text'
        list='task-suggesitons'
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <label htmlFor=''>minutes.</label>
    </FormContainer>
  )
}
