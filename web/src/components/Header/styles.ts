import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-content: center;
  justify-content: space-between;

  width: 100%;

  padding: 10px;
  border-bottom: 1px solid ${(props): string => props.theme.colors.red};

  h1 {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-left: 10px;

  list-style-type: none;

  li {
    margin-right: 15px;
    background: 0;

    a {
      text-decoration: none;
      color: ${(props): string => props.theme.colors.white};

      :active,
      :visited:active {
        color: ${(props): string => props.theme.colors.lightgray};
      }
    }
  }
`;
