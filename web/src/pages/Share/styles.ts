/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
import { shade } from 'polished';

import device from '../../utils/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 4%;

  @media ${device.mobileM} {
    align-items: center;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;

  background: #fff;

  height: 120px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  h1 {
    margin: 0 40px;
    padding: 0;
    max-width: 80vw;

    color: #191e27;
    font-size: 18px;
    font-family: Roboto, sans-serif;

    @media ${device.mobileL} {
      font-size: 20px;
    }

    @media ${device.tablet} {
      font-size: 22px;
    }

    @media ${device.laptopL} {
      font-size: 26px;
    }
  }
`;

export const Advices = styled.div`
  align-self: center;
  background: ${(props) => props.theme.colors.red};
  width: 80vw;
  max-width: 470px;
  padding: 25px;

  margin-top: 10%;
  margin-bottom: 20px;

  p {
    font-weight: bold;
    font-size: 16px;
  }
`;

export const Form = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;

  width: 80vw;
  max-width: 470px;

  /* padding: 0 20px; */

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media ${device.laptop} {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  @media ${device.laptopL} {
    max-width: 470px;
  }
`;

export const Input = styled.input`
  height: 60px;
  width: 100%;
  outline: 0;

  margin-bottom: 30px;
  padding-left: 10px;

  font-size: 18px;
  font-family: Roboto, sans-serif;
  color: ${(props): string => props.theme.colors.white};

  background: ${(props) => props.theme.colors.darkgray};
  border: 0;
  border-left: 5px solid ${(props) => props.theme.colors.red};

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  ::placeholder {
    color: ${(props): string => props.theme.colors.lightgray};
  }
`;

export const TextArea = styled.textarea`
  height: 100px;
  width: 100%;
  outline: 0;

  margin-bottom: 30px;
  padding-left: 10px;

  font-size: 18px;
  font-family: Roboto, sans-serif;
  color: ${(props): string => props.theme.colors.white};

  background: ${(props) => props.theme.colors.darkgray};
  border: 0;
  border-left: 5px solid ${(props) => props.theme.colors.red};

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  resize: none;
  overflow: hidden;
  ::placeholder {
    color: ${(props): string => props.theme.colors.lightgray};
  }
`;

export const ShareBtn = styled.button`
  height: 60px;
  width: 100%;

  margin-top: 10px;

  color: ${(props): string => props.theme.colors.white};

  background: transparent;
  border: 1px solid #fff;

  transition: background-color 0.2s;

  font-family: Roboto, sans-serif;
  font-size: 16px;

  @media (max-height: 700px) {
    margin-bottom: 25px;
  }

  &:hover {
    background: ${shade(0.2, '#2D2D39')};
  }

  @media ${device.tablet} {
    margin-top: 10px;
  }

  @media ${device.laptop} {
    max-width: 40vw;
    margin-bottom: 15px;
  }
`;
