import styled from 'styled-components'

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.success};
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    opacity: 0.8;
  }
`

export default Button