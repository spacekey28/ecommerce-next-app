import Link from "next/link";
import styled from "styled-components";
import UnstyledLink from "./styled/UnstyledLink";

const Nav = styled.nav`
  background: white;
  padding: 2rem;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  font-size: 1.5rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Link href="/">
          <UnstyledLink>Your Store</UnstyledLink>
        </Link>
      </NavContainer>
    </Nav>
  )
}

export default Navbar;