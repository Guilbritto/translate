import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  height: 100%;
  transition: width 0.5s;
  width: ${props => (props.visible ? '15%' : '0%')};
  background: #666;
  overflow: auto;
  position: ${props => (props.overlay ? 'absolute' : 'relative')};
  z-index: 0;

  display: flex;
  flex-direction: column;
`;

export const SideItem = styled(NavLink)`
  list-style: none;
  padding: 20px 10px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: center;
  text-decoration: none;
  text-rendering: unset;
  transition: border-left 0.05s;
  svg {
    margin-right: 15px;
  }

  &:focus {
    border-left: 3px solid #fb8300;
  }
  &:hover {
    background: #999;
    cursor: pointer;
  }
  & + li {
    border-top: 1px solid #999;
  }
`;

export const Hamburger = styled.div`
  box-shadow: 0px 0px 3px #999;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-top: 5px;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  position: ${props => (props.overlay ? 'absolute' : 'relative')}
  &:hover {
    box-shadow: 0px 0px 4px #999;
  }
`;
export const Icon = styled.div`
  height: 100%;
  width: 25%;
`;
