import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import styled from "styled-components";
import UnstyledLink from "../components/styled/UnstyledLink";
import useCart from "../hooks/useCart";

const Container = styled.div`
  background: white;
  padding: 1rem 2rem;
  min-height: 200px;
  position: relative;
  transision: transform 0.3s;

  &:hover {
    transform: scale(1.01);
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  margin: 0.5rem 0;
`;

const Price = styled.div`
  position: absolute;
  bottom: .5rem;
  right: .5rem;
  font-size: 1.5rem;
`;


const renderProduct = (product, addItemToCart) => {
  const handleClick = (e) => {
    e.stopPropagation();
    addItemToCart(product.id);
  }

  return (
    <Link href={product.slug} key={product.id}>
      <UnstyledLink>
        <Container>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <button onClick={handleClick}>Add to cart</button>
          <Price>${product.price / 100}</Price>
        </Container>
      </UnstyledLink>
    </Link>
  );
};

const HomePage = (props) => {
  const { cart, addItemToCart } = useCart();
  console.log(cart);
  return (
    <div>
      <ProductsContainer>{props.products.map(product => renderProduct(product, addItemToCart))}</ProductsContainer>
    </div>
  );
};

export const getStaticProps = async () => {
  const directory = `${process.cwd()}/content`;
  const filenames = fs.readdirSync(directory);

  const products = filenames.map((filename) => {
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
    const { data } = matter(fileContent);
    const slug = `/products/${filename.replace(".md", "")}`;
    const product = {
      ...data,
      slug,
    };
    return product;
  });

  // console.log(products);

  return {
    props: {
      products,
    },
  };
};

export default HomePage;
