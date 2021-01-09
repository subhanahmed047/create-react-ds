import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};
`;

// Passing a default theme for Buttons that arent wrapped in the ThemeProvider
StyledButton.defaultProps = {
  theme: {
    colors: {
      primary: "palevioletred",
    },
  },
};

const Button = (props) => <StyledButton>{props.children}</StyledButton>;

export default Button;
