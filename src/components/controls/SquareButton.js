import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components/macro';
import { withTheme } from '@material-ui/core/styles';

const StyledButton = withTheme(styled(Button)`
  border: 1px solid ${(props) => props.theme.palette[props.color].main};
  background-color: ${(props) => props.theme.palette[props.color].light};
  min-width: 0px;
  margin: 0.25rem;

  & .MuiSvgIcon-root {
    color: ${(props) => props.theme.palette[props.color].main};
  }

  & .MuiButton-label {
    pointer-events: none;
  }
`);

export const SquareButton = (props) => {
  const { color = 'primary', ...other } = props;

  return (
    <StyledButton color={color} {...other}>
      {props.children}
    </StyledButton>
  );
};
