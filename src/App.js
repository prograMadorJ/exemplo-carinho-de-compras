import React, { useState, useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Trans, useTranslation } from 'react-i18next';
import { GlobalStyles } from './theme';
import { data, proxyAPITranslate } from './services/api';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Language from './components/Language';
import SwitchTheme from './components/SwitchTheme';

export default function App() {
  const { i18n } = useTranslation();
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState('lightTheme');
  const stateTheme = { theme, setTheme };

  useMemo(() => {
    setProducts(proxyAPITranslate(i18n.language, data));
  }, [i18n.language, theme]);

  return (
    <ThemeProvider theme={{ name: theme }}>
      <AppContainer>
        <GlobalStyles />
        <ConfigMenu {...{ i18n, stateTheme }} />
        <Cart />
        <Title>
          <Trans>Shop</Trans>
        </Title>
        <Subtitle>
          <Trans>choose items and add in the cart</Trans>
        </Subtitle>
        <ProductList {...{ products }} />
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  margin: 0.5rem;
`;

const ConfigMenu = ({ i18n, stateTheme }) => (
  <ConfigMenuContainer>
    <Language {...{ changeLanguage: i18n.changeLanguage }} />
    <span />
    <SwitchTheme {...{ stateTheme }} />
  </ConfigMenuContainer>
);

const ConfigMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  span {
    border: solid 1px #ccc;
    height: 15px;
    position: relative;
    bottom: 1px;
  }
`;

const Title = styled.h1`
  margin-bottom: 18px;
  margin-left: 12px;
`;

const Subtitle = styled.p`
  margin-bottom: 10px;
  margin-left: 12px;
`;
