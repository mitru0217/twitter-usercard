import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const BackHome = styled(NavLink)`
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.content};
  &:hover {
    color: #00796b;
  }
`;
