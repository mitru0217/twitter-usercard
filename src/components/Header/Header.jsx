import React from 'react';
import { HeaderContainer, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to={'/home'}>Home</StyledLink>
      <StyledLink to={'/tweets'}>Tweets</StyledLink>
    </HeaderContainer>
  );
};

export default Header;
