import styled from 'styled-components'

export const CountDownContainer = styled.div`
  display: flex;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  span {
    display: flex;
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const CountDownColon = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 4rem;
  margin-right: 0.45rem;
  margin-top: 1rem;
  font-size: 12rem;

  color: ${(props) => props.theme['green-500']};
`
