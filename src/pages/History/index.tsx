import { useContext } from 'react'
import { HistoryContainer, ListContainer, Status } from './styles'
import { CyclesContext } from '../../contexts/CycleContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>My history</h1>
      <pre>{JSON.stringify(cycles, null, 2)}</pre>
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
            <tr>
              <td>Clean bedroom</td>
              <td>60 minutes</td>
              <td>About a hour ago</td>
              <td>
                <Status statusColor='green'>Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Clean bedroom</td>
              <td>60 minutes</td>
              <td>About a hour ago</td>
              <td>
                <Status statusColor='red'>Interrupted</Status>
              </td>
            </tr>
            <tr>
              <td>Clean bedroom</td>
              <td>60 minutes</td>
              <td>About a hour ago</td>
              <td>
                <Status statusColor='yellow'>In progress</Status>
              </td>
            </tr>
            <tr>
              <td>Clean bedroom</td>
              <td>60 minutes</td>
              <td>About a hour ago</td>
              <td>
                <Status statusColor='green'>Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Clean bedroom</td>
              <td>60 minutes</td>
              <td>About a hour ago</td>
              <td>
                <Status statusColor='green'>Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Clean bedroom</td>
              <td>60 minutes</td>
              <td>About a hour ago</td>
              <td>
                <Status statusColor='green'>Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Clean bedroom</td>
              <td>60 minutes</td>
              <td>About a hour ago</td>
              <td>
                <Status statusColor='green'>Finished</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </ListContainer>
    </HistoryContainer>
  )
}
