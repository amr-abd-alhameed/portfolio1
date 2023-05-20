import "./App.scss";import {
  Header,
  Home,
  About,
  Exp,
  Projects,
  Contact,
  HI,
  Footer,
} from "./components/index";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/common/index";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <About />
        <Exp />
        <Projects />
        <Contact />
        <HI />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
