import { GlobalStyles } from "./components/styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetail } from "./components/MovieDetail";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { PageNotFound } from "./components/PageNotFound";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container";

const theme = {
  color: {
    primary: "#0f171e",
    secondary: "#1a242f",
    fontPrimary: "#ffffff",
    fontSecondary: "#79b8f3",
  },
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Container>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/movie/:imdbID" element={<MovieDetail />} />
              <Route element={<PageNotFound />} />
            </Routes>
          </Container>
        </BrowserRouter>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
