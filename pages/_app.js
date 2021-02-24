import Link from "next/link";
import styled from "styled-components";
import { Normalize } from "styled-normalize";

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
  background: lightgreen;
  font-family: 'Open Sans', sans-serif;
`;


const MyApp = ({ Component, pageProps }) => {
  return (
    <Container>
      <Normalize />
      <Link href="/">
        <a>
          Home
        </a>
      </Link>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp;