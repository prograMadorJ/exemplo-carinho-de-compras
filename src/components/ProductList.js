import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { useCart } from '../contexts/CartContext';

export default function ProductList({ products }) {
  const cart = useCart();
  const getCartItem = (id) => cart.items.find((item) => item.id === id);
  return (
    <ProductListContainer>
      {products.map((product, i) => (
        <ProductItem
          {...{ product, cartItem: getCartItem(product.id) }}
          key={'product-item-' + i}
        />
      ))}
    </ProductListContainer>
  );
}

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
