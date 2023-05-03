import styled from 'styled-components';

import BgImg from 'assets/images/th.jpg';

export const HomeContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${BgImg});
`;
export const Thumb = styled.div`
  position: absolute;
  width: 550px;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 20px;
  background-color: #00ffff;
  text-align: center;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.5);
`;

export const Text = styled.p`
  margin-bottom: 64px;
  font-size: 24px;
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights.btnText};
  font-size: 2rem;
  background: linear-gradient(to right, #f00, #00f);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  width: 196px;
  height: 50px;
  padding: 12px;
  margin: 0 auto;
  outline: none;
  border: none;
  border-radius: 11px;
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.btnFollow};
  color: ${p => p.theme.colors.btnText};
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights.btnText};
  &:hover {
    background-color: #0000cc;
    color: #ffff;
  }

  & svg {
    width: 24px;
    height: 24px;
    margin-right: 18px;
  }
`;
