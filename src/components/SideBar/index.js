import React from 'react'
import  {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements'
import {animateScroll as scroll} from 'react-scroll'

const Sidebar = ({isOpen,toggle, toggleHome})=>{
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon>
        </CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggleHome}> Acasă</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Servicii</SidebarLink>
          <SidebarLink to="despre_noi" onClick={toggle}>Despre Noi</SidebarLink>
          <SidebarLink to="education" onClick={toggle}>Cum Lucrăm</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
export default Sidebar;