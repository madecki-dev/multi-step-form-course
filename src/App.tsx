import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Button from "./components/Button";
import ArrowRight from "./assets/ArrowIcon.svg";
import Page from "./components/Page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page pageTitle="Welcome">
        <Button>
          Jestem aktywny <img src={ArrowRight} alt="" />
        </Button>
        <Button disabled>Jestem nieaktywny</Button>
      </Page>
    </ThemeProvider>
  );
}

export default App;
