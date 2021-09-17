import React from "react";
import ProductsEditContent from "../../components/products/ProductsEditContent";
import { useParams } from "react-router";
import ProductsCreateContent from "../../components/products/ProductsCreateContent";

const ProductsEditPage: React.FC = () => {
  const selectedProductID = useParams<{ productID: string }>().productID;
  return selectedProductID === "0" ? (
    <ProductsCreateContent />
  ) : (
    <ProductsEditContent />
  );
};

export default ProductsEditPage;
