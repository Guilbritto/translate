import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 300px;
  height: 400px;
  div {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      color: #666;
      font-weight: bold;
      span {
        font-size: 30px;
        color: #fb8300;
        font-weight: bold;
      }
    }
  }
  img {
    width: 128px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      margin: 0 0 15px 0;
      height: 40px;
      border-style: none;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.1);
      padding: 0 15px;
      color: #666;
      transition: background 0.2s;
    }
    span {
      color: #fb8300;
      font-weight: bold;
      margin-top: -14px;
      margin-bottom: 14px;
    }
    button {
      height: 40px;
      border-style: none;
      font-weight: bold;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 15px;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: rgba(0, 0, 0, 0.11);
      }
    }
  }
  a {
    text-align: right;
    text-decoration: none;
    color: #e8ae3a;
    font-weight: bold;

    &:hover {
      color: #fb8300;
    }
  }
`;
