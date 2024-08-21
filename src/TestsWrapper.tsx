import {
  render as originalRender,
  RenderOptions,
} from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { MemoryRouter } from "react-router-dom";

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  );
};

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => originalRender(ui, { wrapper: AllTheProviders, ...options });
