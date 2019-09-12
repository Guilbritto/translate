import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';

export const Container = styled.div`
  height: 100%;
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 60px;
  }

  span {
    font-weight: bold;
    font-size: 16px;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 0px 1px 3px #999;
`;
export const Body = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Main = styled.div`
  min-width: 720px;
  width: 720px;
  background: #fefefe;
  margin: 30px 0;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #999;
  /* div {
    display: flex;
    align-items: center;

    svg {
      cursor: pointer;
      margin-right: 10px;
      border-radius: 50%;
      border: 1px solid #eee;
      &:hover {
        box-shadow: 0px 0px 6px 0px #eee;
      }
      &:active {
        box-shadow: 0px 0px 6px 2px #eee;
      }
    }
  }
  li {
    align-items: center;
    display: flex;
    justify-content: space-around;
    flex: 1;
    margin-right: 12px;
    font-size: 16px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;

    & + li {
      border-top: 1px solid #eee;
    }
  }
  input {
    outline: none;
    border-radius: 4px;
    padding: 5px;
    font-size: 12px;
    border-style: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: ;
  } */
`;

export const Flag = styled(ReactCountryFlag).attrs({
  styleProps: {
    width: '22px',
    height: '22px',
    borderRadius: '2px',
    cursor: 'pointer',
    marginLeft: '10px',
    backgroundSize: 'cover',
    border: '1px solid rgba(0,0,0,0.5)',
  },
})``;

export const SideList = styled.aside`
  background: #fefefe;

  height: 94vh;
  width: 350px;
  list-style: none;
  box-shadow: 0px 1px 3px #999;
  display: flex;
  flex-direction: column;
  ul {
    overflow: auto;
  }
  li {
    height: 30px;
    white-space: nowrap;
    padding: 5px;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 4px 0px #666;
    }

    &:active {
      box-shadow: 0px -2px 4px 0px #666;
    }

    & + li {
      border-top: 1px solid #eee;
    }
  }
`;
export const Chat = styled.div``;

export const SearchInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -1px 0px 1px #666;
  margin-bottom: 10px;
  svg {
    position: absolute;
    left: 17px;
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
