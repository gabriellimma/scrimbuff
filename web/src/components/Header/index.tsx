import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>scrimbuff.com</h1>

      <Menu>
        <li>
          <Link to="/share">Share my IGN</Link>
        </li>

        <li>
          <Link to="/">Find Players</Link>
        </li>
      </Menu>
    </Container>
  );
};

export default Header;
