import React from 'react';
import styled from 'styled-components';
import { FlexGroup } from './HelperComponents';
import { toCurrency } from '../utils';

export default function Product({ product }) {
  return (
    <FlexGroup direction="column">
      <Image src={product.img_url} />
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <Price>{product.price}</Price>
    </FlexGroup>
  );
}

/**
 * Image
 */
export const Image = (props) => (
  <ImageContainer>
    <img {...props} width="90" height="90" />
  </ImageContainer>
);

const ImageContainer = styled.div``;

/**
 * Name
 */
export const Name = (props) => <NameContainer>{props.children}</NameContainer>;

const NameContainer = styled.div`
  font-weight: 600;
  padding-bottom: 4px;
  margin-top: 10px;
`;

/**
 * Description
 */
export const Description = (props) => (
  <DescriptionContainer>{props.children}</DescriptionContainer>
);

const DescriptionContainer = styled.small`
  margin-top: 5px;
`;

/**
 * Price
 */

export const Price = (props) => (
  <PriceContainer>{toCurrency(props.children)}</PriceContainer>
);

const PriceContainer = styled.div`
 font-weight: 500;
 margin-top: 18px;
`;
