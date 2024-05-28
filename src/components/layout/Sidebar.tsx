import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      {/* <h2>✔️</h2> */}
      <h3>TaskFlow</h3>
      <SidebarItem to="/app/list" >Lista</SidebarItem>
      <SidebarItem to="/app/about">Sobre</SidebarItem>
      <SidebarItem to="/app/logout">Sair</SidebarItem>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  width: 10%;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  padding: 20px;
  height: 100vh;
  :last-child {
    justify-self: end;
  }

`

const SidebarItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.active {
    background: rgba(255, 255, 255, 0.3);
  }
`
