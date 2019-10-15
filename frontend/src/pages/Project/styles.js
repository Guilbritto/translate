import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  min-width: 720px;
  width: 980px;
  height: 600px;
  background: #fefefe;
  margin: 30px 0;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #999;
  @media (min-height: 657px) {
    height: 540px;
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

  button {
    border-style: none;
    padding: 0px 15px 0px 0px;
    height: 40px;
    width: 100px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    background: #0aa31d;
    color: #fff;
    transition: background 0.2s;
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
