import styled, { css } from 'styled-components';
import { darken } from 'polished';

var theme = {
  success: '#0aa31d',
  danger: '#de142c',
};

export const Button = styled.button`
  border-style: none;
  height: 35px;
  width: 100px;
  ${props =>
    props.success &&
    css`
      background: ${theme.success};
      &:active {
        background: ${darken(0.03, theme.success)};
      }
    `};
  ${props =>
    props.danger &&
    css`
      background: ${theme.danger};
      &:active {
        background: ${darken(0.03, theme.danger)};
      }
    `};
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  outline: none;
  margin: 10px;
`;
