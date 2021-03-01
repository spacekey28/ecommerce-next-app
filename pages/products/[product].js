import fs from 'fs';
import matter from 'gray-matter';
import marked from 'marked';
import styled from "styled-components";

const Container = styled.div`
  background: white;
  padding: 1rem 2rem;
  margin: 1rem 0;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
`;

const SubTitle = styled.p`
  padding: 0.75rem 0.75rem;
  color: #555;
`;

const Price = styled.span`
  font-size: 2rem;
  background: lightblue;
  padding: 0.25rem 1rem;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 1rem;
  display: inline-block;
`;

const Product = ({ product: { data, content }}) => {
  const html = marked(content);

  return (
    <Container>
      <Title>
        <h1>{data.name}</h1>
        <SubTitle>{data.description}</SubTitle>
      </Title>
      <Price>${data.price / 100}</Price>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
};

export const getStaticPaths = () => {
  const directory = `${process.cwd()}/content`;
  const filenames = fs.readdirSync(directory);

  const paths = filenames.map(filename => {
    return {
      params: {
        product: filename.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async (context) => {
  const productName = context.params.product;
  const filePath = `${process.cwd()}/content/${productName}.md`;
  const fileContent = fs.readFileSync(filePath).toString();
  const { data, content } = matter(fileContent);


  return {
    props: {
      product: {
        data,
        content,
      },
    }
  };
};

export default Product;