import styled from 'styled-components';
import { lighten } from 'polished';

import Spinner from 'react-spinkit';
import device from '../../utils/devices';

interface ButtonProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 4%;

  & > h2 {
    align-self: center;
    font-size: 22px;
    margin-top: 50px;
    margin-bottom: 50px;

    @media ${device.mobileL} {
      font-size: 26px;
    }

    @media ${device.tablet} {
      font-size: 28px;
    }

    @media ${device.desktop} {
      font-size: 32px;
    }
  }

  & > p {
    align-self: center;
    color: red;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;

  background: #fff;

  height: 120px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  h1 {
    margin: 0 40px;
    padding: 0;
    max-width: 80vw;

    color: #191e27;
    font-size: 18px;
    font-family: Roboto, sans-serif;
    /* letter-spacing: 1.5px; */

    @media ${device.mobileL} {
      font-size: 28px;
    }

    @media ${device.tablet} {
      font-size: 30px;
    }

    @media ${device.laptopL} {
      font-size: 26px;
    }
  }
`;

export const PlayerList = styled.div`
  /* background: ${(props): string => props.theme.colors.darkgray}; */
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 20px;  
  margin-top: 25px;

  @media ${device.mobileL} {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  @media ${device.tablet} {
    /* margin: 0 auto; */
  }

  @media ${device.laptop} {
    justify-content: center;
  }
`;

export const Filters = styled.div`
  align-self: center;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: auto;
  max-width: 80vw;
  background: ${(props) => props.theme.colors.darkgray};
  border-radius: 4px;

  margin-bottom: 25px;
`;

export const Button = styled.button<ButtonProps>`
  background: transparent;

  color: ${(props) =>
    props.isSelected
      ? props.theme.colors.white
      : lighten(0.25, props.theme.colors.darkgray)};
  border: 0;

  padding: 10px 10px;
  outline: 0;
  cursor: pointer;
  margin-right: 10px;
`;

export const SpinnedStyled = styled(Spinner)`
  align-self: center;
  height: 90px;

  margin-top: 25px;
`;

export const Error = styled.div`
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: Roboto, sans-serif;
    font-weight: normal;
  }
`;

export const ErrorButton = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;

  margin-top: 10px;

  background: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
`;
