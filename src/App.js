import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik Iso';
  }
`;

function App() {
  return (
    <Container>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      hello
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid red;
`;
