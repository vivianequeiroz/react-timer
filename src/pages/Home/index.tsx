import { Play } from 'phosphor-react'

export function Home() {
  return (
    <div>
      <form action=''>
        <label htmlFor='task'>I will be working on</label>
        <input id='task' type='text'></input>
        <label htmlFor=''>for</label>
        <input id='minutesAmount' type='number'></input>
      </form>

      <div>
        <span>0</span>0<span>:</span>
        <span>0</span>
        <span>0</span>
      </div>

      <button type='submit'>
        <Play size={24} />
        Start
      </button>
    </div>
  )
}
