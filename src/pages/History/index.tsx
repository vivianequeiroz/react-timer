import { useContext } from 'react'
import { HistoryContainer, ListContainer, Status } from './styles'
import { CyclesContext } from '../../contexts/CycleContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>My history</h1>
      <ListContainer>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor='green'>Finished</Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status statusColor='red'>Interrupted</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor='yellow'>On going</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ListContainer>
    </HistoryContainer>
  )
}
