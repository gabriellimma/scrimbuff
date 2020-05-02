/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import { PaginationProps } from '@material-ui/lab';
import { ThemeProvider } from '@material-ui/styles';

import { PaginationStyled } from './styles';
import theme from './theme';

const MaterialPagination: React.FC<PaginationProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <PaginationStyled {...props} />
    </ThemeProvider>
  );
};

export default MaterialPagination;
