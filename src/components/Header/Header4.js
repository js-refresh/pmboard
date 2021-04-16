import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: red;
  height: 100%;
  margin:  7% 3% 1% 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  height: 64px;
  pointer-events: none;
`;

const Header4 = () => (
  <HeaderWrapper>
    <Title>Team 4</Title>
  </HeaderWrapper>
);



export default Header4;


