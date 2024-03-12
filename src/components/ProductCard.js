import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ImgContainer = styled.img`
  border-radius: 5px 5px 5px 5px;
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardBody = styled.div`
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const ProductCard = ({ product }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImgIndex((prevIndex) =>
        prevIndex === product.img.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [product.img.length]);

  return (
    <div>
      <ImgContainer src={product.img[currentImgIndex]} />
      <hr />
      <CardBody>
        Product Code<br></br> {product.product_code}
      </CardBody>
      <CardBody>
        Price<br></br>
        {product.price}
      </CardBody>
      <CardBody>
        Quantity<br></br>
        {product.quantity}
      </CardBody>
    </div>
  );
};

export default ProductCard;
