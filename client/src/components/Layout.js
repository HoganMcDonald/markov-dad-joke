import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  grid-template-columns: auto 18rem;
  grid-template-rows: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    grid-template-columns: 1fr;
    grid-template-rows: 90vh 90vh;
  }
`;

const Content = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.fg};
`;

const SideBar = styled.aside`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default class Layout extends PureComponent {
  render() {
    return (
      <Main>
        <Content>{this.props.children}</Content>
        <SideBar />
      </Main>
    );
  }
}
