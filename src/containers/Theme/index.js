import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./Variables";

const Theme = ({ children }) => (
  <ThemeProvider {...{ theme }}>
    <>{children}</>
  </ThemeProvider>
);

export default Theme;
