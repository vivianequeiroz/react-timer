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

export const BaseButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  gap: 0.5rem;

  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
