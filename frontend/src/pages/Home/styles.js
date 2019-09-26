import styled, { css } from 'styled-components';
import ReactCountryFlag from 'react-country-flag';

export const Body = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Main = styled.div`
  min-width: 720px;
  width: 720px;
  background: #fefefe;
  margin: 30px 0;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #999;
`;

export const Flag = styled(ReactCountryFlag).attrs(props => ({
  styleProps: {
    width: '22px',
    height: '22px',
    borderRadius: '2px',
    cursor: 'pointer',
    marginLeft: '10px',
    backgroundSize: 'cover',
    border: '1px solid rgba(0,0,0,0.5)',
    onClick: props.onClick,
  },
}))``;

export const SideList = styled.aside`
  background: #fefefe;
  border-radius: 4px;
  height: calc(100vh - 80px);
  margin: 15px 0 15px 10px;
  width: 350px;
  list-style: none;
  box-shadow: 0px 1px 3px #999;
  display: flex;
  flex-direction: column;
  ul {
    overflow: auto;
  }
`;
export const Chat = styled.div``;

export const SearchInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #eee;

  svg {
    position: absolute;
    left: 27px;
    width: 22px;
    color: #666;
    font-weight: 600;
  }
  input {
    padding-left: 27px !important;
    margin: 10px;
    border-style: none;
    border-radius: 4px;
    border: 1px solid #eee;
    box-shadow: 0px 1px 1px #eee;
    height: 30px;
    padding: 10px;
    font-size: 14px;
    width: 95%;
    color: #666;
    font-weight: 600;
  }
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid #eee;
  svg {
    width: 50px;
    cursor: pointer;
  }
  h1 {
    color: #666;
  }
`;

export const MainBody = styled.div`
  padding: 30px;
  div {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      margin: 0;
    }
  }
  textarea {
    padding: 15px;
    font-size: 14px;
    color: #666;
    width: 95%;
    height: 168px;
    border-style: none;
    border: 1px solid #eee;
    border-radius: 4px;
  }
`;
export const MainFooter = styled.div`
  border-top: 1px solid #ccc;
  padding: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const SideItem = styled.li`
  height: 30px;
  white-space: nowrap;
  padding: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      background: #333;
      color: #fff;
      font-weight: bold;
    `};

  &:hover {
    box-shadow: 0px 0px 4px 0px #666;
  }

  & + li {
    border-top: 1px solid #eee;
  }
`;
