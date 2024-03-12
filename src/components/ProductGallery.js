import React from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(256, 232, 47, 50%);
  border-radius: 10px;
  width: 80%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 10px;
  border: 3px solid rgb(256, 232, 47, 50%);
  overflow-y: scroll;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
`;

const GridItem = styled.div`
  background-color: rgba(35, 31, 92, 100%);
  border: 1px solid rgba(35, 31, 92, 100%);
  padding: 20px;
  margin-right: 25px;
  margin-bottom: 25px;
  margin-left: 25px;
  border-radius: 5px;
  width: 300px;
  height: 300px;
`;
const ProductGallery = ({ products }) => {
  return (
    <Container>
      <GridContainer>
        {products.map((product) => (
          <GridItem key={product.id}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
};

export default ProductGallery;
