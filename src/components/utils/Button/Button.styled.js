import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 196px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 11px;
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.btnFollow};
  color: ${p => p.theme.colors.btnText};
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights.btnText};
  &:hover {
    background-color: ${p => p.theme.colors.btnFollowing};
  }
`;
