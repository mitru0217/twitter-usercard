import styled from 'styled-components';

export const TitleList = styled.h2`
  margin: 0;
  margin-top: 15px;
  padding: 10px;
  font-size: 50px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.text};
`;
export const List = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 1;
  margin: 0;
  padding: 0;
  margin-bottom: 50px;
  /* width: auto; */
`;
