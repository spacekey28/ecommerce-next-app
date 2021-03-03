import styled from "styled-components";
import { Normalize } from "styled-normalize";
import Navbar from "../components/Navbar";
import CartProvider from "../context/Cart";
import Cart from "../components/Cart";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap");
  background: linear-gradient(to right, #f1f1f1, #d7d2cc);
  font-family: "Open Sans", sans-serif;
  color: #333;
`;

const Page = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Container>
        <Normalize />
        <Navbar></Navbar>
        <Page>
          <Component {...pageProps} />
        </Page>
        <Cart />
      </Container>
    </CartProvider>
  );
};

export default MyApp;
