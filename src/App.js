import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Header } from "./components/Header";
import galleria from "./images/galleria..png";
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: '
    Libre Baskerville';
  }
`;
let data = require("./data.json");
function App() {
  const [info, setInfo] = useState(data);
  console.log(info);
  return (
    <Container>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Header>
        <img src={galleria} alt="" />
        <SlideShowText>START SLIDESHOW</SlideShowText>
      </Header>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;
const SlideShowText = styled.p`
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 2.57143px;
  color: #7d7d7d;
`;
