import React, { useState } from 'react';
import styled from 'styled-components';
import { Trans, useTranslation } from 'react-i18next';

import { FlexGroup } from './HelperComponents';
import CounterItems from './shared/CounterItems';
import { showIf, toCurrency } from '../utils';
import Icon from './shared/Icon';

import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCart();

  const states = {
    _hasItems: cart.items.length > 0,
    'data-added': false,
  };

  function handleTogglePanel() {
    setIsOpen(!isOpen);
  }

  return (
    <CartContainer
      data-has-items={states._hasItems}
      data-open={isOpen}
      onClick={() => !isOpen && handleTogglePanel()}
    >
      <Icon className="fab-open fa-solid fa-cart-shopping fa-2x" />
      <CartPanel data-open={isOpen}>
        <ContainerPanel>
          <Header
            {...{ states }}
            onClear={cart.clear}
            onClose={handleTogglePanel}
          />
          <CartItems {...{ cart, states }} />
          <CartTotalsToCheckOut {...{ cart }} />
        </ContainerPanel>
      </CartPanel>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 20px;

  &[data-open='false'] {
    cursor: pointer;
  }

  background: var(--btnSurface);
  border-radius: 80px;
  padding: 12px;
  box-shadow: 0 0 10px -2px #999;
  transition: all 0.2s ease;

  &:hover {
    background: var(--bgOrange);
    i.fab-open {
      color: var(--fabIcon);
    }
  }

  &[data-open='false']:active {
    box-shadow: 0 0 10px -4px #999;
    i.fab-open {
      font-size: 30px;
    }
  }

  &[data-has-items='true']:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background: var(--outlineRed);
    top: -2px;
    right: 0px;
    border-radius: 20px;
  }
`;

const CartPanel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  max-width: 350px;
  min-width: 350px;
  min-height: 100vh;

  background: var(--white);

  transform: translateX(100%);
  transition: transform 0.25s ease-in-out;

  &[data-open='true'] {
    transform: translateX(0);
  }

  border-left: 1px solid #eee;
  box-shadow: 0 0 20px -5px #0005; 

`;

const ContainerPanel = styled.div`
  margin: 20px;
`;

/**
 * Header
 */
const Header = ({ onClose, onClear, states }) => (
  <HeaderContainer>
    <FlexGroup justify="space-between" align="center">
      <FlexGroup align="center">
        <ClearCartButton {...states} onClick={onClear}>
          <Trans>clear</Trans>
        </ClearCartButton>
      </FlexGroup>
      <FlexGroup
        className="cart-panel-close"
        justify="flex-end"
        align="center"
        onClick={onClose}
      >
        <Icon className="fa-solid fa-xmark fa-1x" />
      </FlexGroup>
    </FlexGroup>
  </HeaderContainer>
);

const HeaderContainer = styled.div`

  & .cart-panel-close {
    width: auto;
    cursor: pointer;
    border-radius: 20px;
    padding: 3px 7px;
    font-size: 20px;
    
    & i:before {
      color: var(--text);
    }


    &:hover {
      box-shadow: 0 0 5px -1px #999;
    }

    &:active {
      scale: 0.99;
      box-shadow: 0 0 3px -1px #999;
    }
  }
`;
/**
 * Clear Cart Button
 */
const ClearCartButton = ({ _hasItems, children, onClick }) =>
  showIf(
    _hasItems,
    <ClearCartButtonContainer {...{ onClick }}>
      {children}
    </ClearCartButtonContainer>
  );

const ClearCartButtonContainer = styled.button`
  border: 1px solid #dddc;
  background: var(--btnSurface);
  color: var(--text);
  cursor: pointer;
  border-radius: 20px;
  padding: 2px 8px;
  margin-top: 10px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 10px -3px #999;
  }

  &:active {
    box-shadow: 0 0 10px -5px #999;
    scale: 0.95;
  }

  &:before {
    font-family: "Font Awesome 6 Free"; 
    font-weight: 600; 
    content: "\f1f8";
    padding-right: 6px;
    font-size: 10px;
  }
`;

/**
 * Title
 */
const Title = styled.div`
  font-size: 32px;
  margin-left: 8px;
  display: inline-bliock;
`;

/**
 * Cart Items
 */
const CartItems = ({ cart, states }) => {
  return (
    <CartItemsContainer>
      <FlexGroup direction="column">
        {cart.items.map((item, i) => (
          <CartItem {...{ item, cart, states }} key={'cart-item-' + i} />
        ))}
        <CartEmpty isEmpty={cart.items.length === 0} />
      </FlexGroup>
    </CartItemsContainer>
  );
};

const CartItemsContainer = styled.div`
  & > div {
    margin-top: 30px;
    height: calc(100vh - 260px);
    overflow: hidden auto;
  }

  position: relative;
`;

/**
 * CartEmpty
 */
const CartEmpty = (props) =>
  showIf(
    props.isEmpty,
    <CartEmptyContainer>
      <FlexGroup justify="center" align="center" direction="column" fillHeight>
        <CartEmptyImg />
        <span>
          <Trans>Cart is empty, add some items.</Trans>
        </span>
      </FlexGroup>
    </CartEmptyContainer>
  );

const CartEmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  span {
    text-align: center;
    color: var(--text);
    font-size: 14px;
  }
`;

const CartEmptyImg = styled.div`

  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoaV_TPi9Wpd--kOSujkbxbBBhLyKGvvVGTg&usqp=CAU');

  background-size: cover;
  background-repeat: no-repeat;

  width: 100px;
  height: 100px;

  filter: hue-rotate(226deg) grayscale(1) var(--filterDarkImg);
  
  margin: 20px 0px 25px; 0;

`;

/**
 * Cart Item
 */
const CartItem = ({ item, cart, states }) => {
  const CounterItemsProps = {
    count: item?.count,
    onUp: () => cart.add(item, item.states()),
    onDown: () => cart.remove(item, item.states()),
    states: { ...states, _showHasAdded: true },
  };

  return (
    <CartItemContainer>
      <FlexGroup justify="space-between">
        <FlexGroup direction="column">
          <small>
            <Trans>product</Trans>
          </small>
          <div className="cart-item-name">{item.name}</div>
          <div className="cart-item-desc">{item.description}</div>
        </FlexGroup>
        <FlexGroup>
          <FlexGroup
            direction="column"
            align="flex-end"
            justify="space-between"
          >
            <FlexGroup direction="column" align="flex-end">
              <small>
                <Trans>price</Trans>
              </small>
              <div className="cart-item-price">{toCurrency(item.price)}</div>
            </FlexGroup>
          </FlexGroup>
        </FlexGroup>
      </FlexGroup>
      <FlexGroup justify="space-between">
        <FlexGroup direction="column">
          <small>
            <Trans>quant</Trans>
          </small>
          <div className="cart-item-subtotal">
            <CounterItems {...CounterItemsProps} />
          </div>
        </FlexGroup>
        <FlexGroup direction="column" align="flex-end">
          <small>subtotal</small>
          <div className="cart-item-subtotal">{toCurrency(item.subtotal)}</div>
        </FlexGroup>
      </FlexGroup>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  border-bottom: solid 1px #ccc;
  padding-bottom: 10px;
  margin: 5px;

  & .cart-item {
    &-name {
      margin-bottom: 5px;
      font-weight: 600;
    }
    &-desc {
      margin-bottom: 8px;
    }
    &-subtotal {
      font-weight: 600;
    }
  }

  small {
    margin: 4px 0;
  }
`;

/**
 * Image
 */
export const Image = (props) => (
  <ImageContainer>
    <img {...props} width="90" />
  </ImageContainer>
);

const ImageContainer = styled.div`
 
`;

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

/**
 * Cart Totals To CheckOut
 */
const CartTotalsToCheckOut = ({ cart }) => {
  const { t } = useTranslation();
  const totals = cart.items.reduce(
    (ac, it) => {
      ac.items += 1;
      ac.quant += it.count;
      ac.total += it.subtotal;

      return ac;
    },
    { items: 0, quant: 0, total: 0 }
  );

  const notice = `${t(
    'Sorry but the payment method was not implemented'
  )} ¯\\_(ツ)_/¯`;

  return showIf(
    cart.items.length > 0,
    <CartTotalsToCheckOutContainer>
      <FlexGroup className="total-items" justify="space-between">
        <Trans>Items</Trans>:<p>{totals.items}</p>
      </FlexGroup>
      <FlexGroup className="total-quant" justify="space-between">
        <Trans>Quant</Trans>:<p>{totals.quant}</p>
      </FlexGroup>
      <FlexGroup className="total-amount" justify="space-between">
        <Trans>Total</Trans>:<p>{toCurrency(totals.total)}</p>
      </FlexGroup>
      <FlexGroup>
        <CheckOutButton onClick={() => alert(notice)}>
          <Trans>check out</Trans>
        </CheckOutButton>
      </FlexGroup>
    </CartTotalsToCheckOutContainer>
  );
};

const CartTotalsToCheckOutContainer = styled.div`
  padding: 10px 0;

  & .total-items,
  & .total-quant,
  & .total-amount {
    margin: 15px 0;
  }

  & .total-amount {
    font-weight: 600;
  }
`;

const CheckOutButton = styled.button`
  width: 100%;
  color: var(--btnTextWhite);
  background: var(--btnRed);
  border: solid 1px var(--btnRed);
  border-radius: 3px;
  padding: 12px 0;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 6px;
  cursor: pointer;


  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    scale: 0.98;
  }
`;
