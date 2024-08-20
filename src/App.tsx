import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import GlobalStyle from "./GlobalStyles";
import NavProvider from "./components/Nav/NavProvider";
import Nav from "./components/Nav/Nav";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavProvider>
        <Nav />
        <RouterProvider router={router}/>
      </NavProvider>
    </ThemeProvider>
  );
}

export default App;
