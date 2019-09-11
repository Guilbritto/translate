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
  max-width: 1098px;
  flex-direction: column;
  align-items: center;
  margin: 30px auto 0px;
  padding: 30px 0;
  background: #fefefe;
  border-radius: 4px;
`;
export const List = styled.ul`
  list-style: none;
  width: 100%;
  div {
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
  }
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

export const Star = styled.div``;
