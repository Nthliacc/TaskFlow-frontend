import styled, { css } from 'styled-components';

interface ButtonProps {
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 2px;
  border: none;

  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  
  ${(props) => props.secondary && css`
    background-color: ${(props) => props.theme.colors.secondary};
  `}
  ${(props) => props.danger && css`
    background-color: ${(props) => props.theme.colors.danger};
  `}
  ${(props) => props.disabled && css`
    background-color: gray;
    cursor: not-allowed;
  `}
  
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;