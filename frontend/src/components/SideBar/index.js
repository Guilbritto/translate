import React, { useState } from 'react';
import { Container, SideItem, Hamburger, Icon } from './styles';
import { MdChevronRight, MdChevronLeft, MdHome } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';

export default function SideBar(props) {
  const [visible, setVisible] = useState(false);

  const [sideItems, setSideItems] = useState([]);
  const menu = [
    { Icon: MdHome, label: 'Home', to: '/home' },
    { Icon: FaClipboardList, label: 'Projetos', to: '/projects' },
  ];
  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <>
      <Container visible={visible} overlay={props.overlay}>
        {menu.map(items => (
          <SideItem key={items.to} to={items.to}>
            <Icon>
              <items.Icon size={25} />
            </Icon>
            <span>{items.label}</span>
          </SideItem>
        ))}
      </Container>
      <Hamburger onClick={handleVisible} overlay={props.overlay}>
        {visible ? <MdChevronLeft size={25} /> : <MdChevronRight size={25} />}
      </Hamburger>
    </>
  );
}
