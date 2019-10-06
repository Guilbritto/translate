import React from 'react';

import { HeaderContainer, Logo, UserInfo } from './styles';
import logo from '~/assets/logo-default.svg';
import { store } from '~/store';

export default function Header() {
  const user = store.getState().user.profile;
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="PZM Enterprise" />
        <span>
          <span>PZM</span>Tools
        </span>
      </Logo>
      <UserInfo>
        <span>{user.name}</span>
      </UserInfo>
    </HeaderContainer>
  );
}
