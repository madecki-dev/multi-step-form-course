import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import GlobalStyle from "./GlobalStyles";
import NavProvider from "./components/Nav/NavProvider";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavProvider>
        <Nav />
      </NavProvider>
    </ThemeProvider>
  );
}

export default App;
