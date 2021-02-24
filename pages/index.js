import fs from 'fs';
import Link from 'next/link';
import matter from "gray-matter";
import styled from "styled-components";

const Container = styled.div`
  // background: red;
`

const HomePage = (props) => {
  return props.products.map(product => {
    return (
      <Container>
        <Link href={product.slug}>
          <a>
            <h1>{product.name}</h1>
          </a>
        </Link>
        <p>{product.description}</p>
        <p>{product.price / 100 }</p>
      </Container>
    )
  })
};

export const getStaticProps = async () => {
  const directory = `${process.cwd()}/content`;
  const filenames = fs.readdirSync(directory);

  const products = filenames.map(filename => {
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
    const { data } = matter(fileContent);
    const slug = `/products/${filename.replace('.md', '')}`;
    const product = {
      ...data,
      slug,
    }
    return product;
  });

  console.log(products);

  return {
    props: {
      products,
    }
  }
}

export default HomePage;
