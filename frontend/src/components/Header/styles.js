import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 0px 1px 3px #999;
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
    span {
      color: #fb8300;
    }
  }
`;

export const UserInfo = styled.div`
  span {
    font-weight: bold;
    font-size: 14px;
  }
`;
