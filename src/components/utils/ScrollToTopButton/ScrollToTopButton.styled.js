import styled from 'styled-components';

export const ButtonStyled = styled.button`
  position: fixed;
  bottom: 25vh;
  right: 10vw;
  z-index: 1000;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: ${p => p.theme.colors.btnFollow};
  &:hover {
    background-color: ${p => p.theme.colors.btnFollowing};
  }
`;
