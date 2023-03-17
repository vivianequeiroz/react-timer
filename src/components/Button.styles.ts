import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 6.25rem;
  height: 2.5rem;
  border-radius: 74px;
  border: 0;
  margin: 0.5rem;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  /*${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}*/
`
