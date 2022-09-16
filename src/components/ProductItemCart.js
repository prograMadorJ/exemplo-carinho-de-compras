import React from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';
import { showIf, toCurrency } from '../utils';
import { FlexGroup } from './HelperComponents';
import CounterItems from './shared/CounterItems';
import { useCart } from '../contexts/CartContext';

export default function ProductItemCart({ states, product, cartItem }) {
  const cart = useCart();
  const CounterItemsProps = {
    count: cartItem?.count,
    onUp: () => cart.add(cartItem, states),
    onDown: () => cart.remove(cartItem),
    states,
  };

  function handleStartAddItem() {
    !states._showHasAdded && cart.add(product, states);
  }

  return (
    <CartControllsContainer {...states} onClick={handleStartAddItem}>
      <FlexGroup justify="space-between">
        <LabelQuant {...states} />
      </FlexGroup>
      <FlexGroup justify="space-between">
        <FlexGroup align="center">
          <CounterItems {...CounterItemsProps}>
            <Info {...states}>add to cart</Info>
          </CounterItems>
        </FlexGroup>
        <SubTotal {...states}>{cartItem?.subtotal}</SubTotal>
      </FlexGroup>
    </CartControllsContainer>
  );
}

/**
 * CartControlls
 */
const CartControllsContainer = styled.div`
 border: solid 1px transparent;
 padding: 10px;
 margin-top: 20px;
 border-radius: 3px;
 cursor: pointer;
 
 &[data-added='true'] {
   background: var(--bgGreen);
   border: solid 1px var(--outlineGreen);
   cursor: unset;
 }

 &:hover {
  border: solid 1px var(--outlineGreen);
  background: var(--bgGreen);
 }

 &[data-added='false']:active {
   scale: 0.98;
 }
 `;

/**
 * Label Quant
 */

function LabelQuant(props) {
  return showIf(
    props._showHasAdded,
    <>
      <LabelContainer>quant</LabelContainer>
    </>
  );
}

const LabelContainer = styled.label`
  padding-bottom: 8px;
  font-size: 13px;
 `;

/**
 * Info
 */
const Info = (props) =>
  showIf(
    props._hideHasAdded,
    <InfoContainer>
      <Trans>{props.children}</Trans>
    </InfoContainer>
  );

const InfoContainer = styled.small`
  padding: 0 5px;
  color: var(--green);
 `;

/**
 * SubTotal
 */
const SubTotal = (props) =>
  showIf(
    props._showHasAdded,
    <FlexGroup align="center" justify="flex-end">
      <SubTotalContainer>
        <div className="label-subtotal">subtotal</div>
        <div>{toCurrency(props.children)}</div>
      </SubTotalContainer>
    </FlexGroup>
  );

const SubTotalContainer = styled.div`
 font-size: 13px;
 text-align: right;
 padding-left: 10px;

 & .label-subtotal {
  padding-bottom: 3px;
  font-size: 11px;
 }
`;
