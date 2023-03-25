import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`
export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.25rem;
  font-weight: bold;
`
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

export const StartButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  gap: 0.5rem;

  font-weight: bold;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
