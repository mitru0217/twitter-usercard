import styled from 'styled-components';

export const Select = styled.select`
  width: 250px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 11px;
  margin-bottom: 48px;
  text-align: center;
  font-size: 20px;
  color: ${p => p.theme.colors.btnText};
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights.btnText};
  background-color: ${p => p.theme.colors.btnFollow};
`;
