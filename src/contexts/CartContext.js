import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext({});

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  /**
   * Add Item
   */
  function add(product, states = {}) {
    const isNew = !items?.some((item) => item.id === product.id);

    const item = { count: 0, subtotal: 0, states: () => states };

    item.id = product.id;
    item.name = product.name;
    item.description = product.description;
    item.price = product.price;

    if (isNew) {
      item.count = 1;
      item.subtotal = item.count * product.price;
      setItems((c) => [...c, item]);
    } else {
      item.count = product.count + 1;
      item.subtotal = item.count * product.price;
      _update(item);
    }
  }

  /**
   * Remove Item
   */
  function remove(product) {
    const itemAdded = items?.find((e) => e.id === product.id);

    itemAdded.count -= 1;
    itemAdded.subtotal = itemAdded.count * product.price;

    if (itemAdded) {
      _update(itemAdded);
    }
  }

  /**
   * Clear Cart
   */
  function clear() {
    setItems([]);
  }

  /**
   * Update Item
   */
  function _update(product) {
    const cartItems = items.map((item) => {
      if (item.id === product.id) {
        if (item.count <= 0) {
          return null;
        }
        return {
          ...item,
          count: product.count,
          subtotal: product.subtotal,
          states: product.states,
        };
      }
      return item;
    });
    setItems(cartItems.filter((item) => item !== null));
  }

  return (
    <CartContext.Provider
      value={{
        items,
        add,
        remove,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
