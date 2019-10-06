import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './styles';
import Header from '~/components/Header';
import SideBar from '~/components/SideBar';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>
        <SideBar />
        {children}
      </Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
