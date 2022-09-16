import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import ProductItemCart from './ProductItemCart';

export default function ProductItem({ product, cartItem }) {
  const count = cartItem?.count ?? 0;
  const states = {
    _hasAdded: count > 0,
    _showHasAdded: count > 0,
    _hideHasAdded: count <= 0,
    'data-added': count > 0,
  };

  return (
    <ProductItemContainer>
      <Product {...{ product }} />
      <ProductItemCart {...{ product, cartItem, states }} />
    </ProductItemContainer>
  );
}

const ProductItemContainer = styled.div`
  border-radius: 10px;
  border: solid 1px var(--greyE);
  padding: 12px;
  min-width: 203px;
  max-width: 203px;
  margin: 12px;
  box-shadow: 0 1px 13px -9px #0005;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
