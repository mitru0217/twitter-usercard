import styled from 'styled-components';

import { ReactComponent as Logo } from 'assets/images/Logo.svg';

export const CardWrapper = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  padding-top: 20px;
  margin-bottom: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const LogoWrapper = styled.div`
  width: 76px;
  height: 22px;
  margin-left: 20px;
`;
export const LogoStyled = styled(Logo)`
  display: inline-block;
  margin: 0;
  padding: 0;
`;

export const Thumb = styled.div`
  position: absolute;
  top: 28px;
  left: 36px;
  width: 308px;
  height: 168px;
  background: transparent;
`;
export const ImgStyled = styled.img`
  background: transparent;
`;
export const Composition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 136px;
`;
export const Line = styled.div`
  width: 150px;
  height: 8px;
  background-color: ${p => p.theme.colors.bgLine};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid ${p => p.theme.colors.bgLine};
  outline: 0;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 26px;
  margin-bottom: 26px;
  height: 80px;
`;
export const TextStyled = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.content};
`;

// export const Button = styled.button`
//   width: 196px;
//   height: 50px;
//   outline: none;
//   border: none;
//   border-radius: 11px;
//   text-transform: uppercase;
//   background-color: ${p => p.theme.colors.btnFollow};
//   color: ${p => p.theme.colors.btnText};
//   font-weight: ${p => p.theme.fontWeights[2]};
//   line-height: ${p => p.theme.lineHeights.btnText};
//   &:hover {
//     background-color: ${p => p.theme.colors.btnFollowing};
//   }
// `;

export const Img = styled.img`
  border-radius: 50%;
`;
