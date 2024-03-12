import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(256, 232, 47, 50%);
  border-radius: 10px;
  width: 80%;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 10px;
  border: 3px solid rgb(256, 232, 47, 50%);
  overflow-y: auto;
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
  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductList] = useState([]);
  const loaderRef = useRef(null);

  useEffect(() => {
    setProductList(products.slice(0, 8));
  }, [products]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loaderRef]);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (currentPage > 1) {
      const startIndex = (currentPage - 1) * 8;
      const endIndex = currentPage * 8;
      const newProductList = products.slice(startIndex, endIndex);
      setProductList((firstProductSet) => [
        ...firstProductSet,
        ...newProductList,
      ]);
    }
  }, [currentPage, products]);
  return (
    <Container>
      <GridContainer>
        {productList.map((product) => (
          <GridItem key={product.id}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </GridContainer>
      <div ref={loaderRef} />
    </Container>
  );
};

export default ProductGallery;
