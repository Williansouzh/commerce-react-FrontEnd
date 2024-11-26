// ProductCardComponent.tsx
import React from "react";
import {
  ProductCard,
  ProductCategory,
  ProductDetails,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./ProductsCard.styles";
import { Button } from "../Button/Button";
import { Product } from "../../pages/Products/ProductsPage";
import { useCart } from "../../contexts/CartContext";

interface ProductCardComponentProps {
  product: Product;
}

export default function ProductCardComponent({
  product,
}: ProductCardComponentProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <ProductCard key={product.id}>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductCategory>{product.category.name}</ProductCategory>
        <ProductDetails>
          <ProductPrice>${Number(product.price).toFixed(2)}</ProductPrice>
          <Button
            type="button"
            color="success"
            size="small"
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </ProductDetails>
      </ProductInfo>
    </ProductCard>
  );
}
