import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ptBr: {
    translation: {
      Shop: 'Loja',
      'choose items and add in the cart':
        'escolha itens e adicione no carrinho',
      'add to cart': 'adicione ao carrinho',
      language: 'idioma',
      Cart: 'Carrinho',
      close: 'fechar',
      product: 'produto',
      quant: 'qtd.',
      price: 'preço',
      clear: 'limpar',
      'Cart is empity, add some items.':
        'O carrinho está vazio, adicione alguns itens.',
      Items: 'Itens',
      Quant: 'Qtd.',
      'check out': 'Finalizar compra',
      'switch to dark theme': 'trocar para tema escuro',
      'switch to light theme': 'trocar para tema claro',
      'Sorry but the payment method was not implemented':
        'Desculpe mas o meio de pagamento não foi implementado',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ptBr',
});

export default i18n;
