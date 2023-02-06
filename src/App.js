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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/common/index";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Exp" element={<Exp />} /> */}
          </Routes>
          <About />
          <Exp />
          <Projects />
          <Contact />
          <HI />
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
