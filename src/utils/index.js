import { useTranslation } from 'react-i18next';

export const toCurrency = (value) => {
  const { i18n } = useTranslation();

  const lng = i18n.language === 'ptBr' ? 'pt-br' : 'en-US';

  const currency = i18n.language === 'ptBr' ? 'BRL' : 'USD';

  return new Intl.NumberFormat(lng, {
    style: 'currency',
    currency,
  }).format(value);
};

export const showIf = (cond, el) => (cond ? el : '');
