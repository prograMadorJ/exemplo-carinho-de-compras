export const data = [
  {
    id: 1,
    name: 'Orange Juice',
    description: '500 ml',
    img_url:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQP3r_7eJ6hclGd6Iz0sUYfdxJE78esmZWvlHTyg-PEnK0Tje7GLzy4MYGVr_Q1yGGH1wjECUPdz_w&usqp=CAc',
    price: 20.6,
  },
  {
    id: 2,
    name: 'Bread',
    description: '250 g',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1yK2HOFtUJgfNvOU6205OSpxsd4A4WL3DA&usqp=CAU',
    price: 2.6,
  },
  {
    id: 3,
    name: 'Orange Juice',
    description: '500 ml',
    img_url:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQP3r_7eJ6hclGd6Iz0sUYfdxJE78esmZWvlHTyg-PEnK0Tje7GLzy4MYGVr_Q1yGGH1wjECUPdz_w&usqp=CAc',
    price: 20.6,
  },
  {
    id: 4,
    name: 'Bread',
    description: '250 g',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1yK2HOFtUJgfNvOU6205OSpxsd4A4WL3DA&usqp=CAU',
    price: 2.6,
  },
  {
    id: 5,
    name: 'Orange Juice',
    description: '500 ml',
    img_url:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQP3r_7eJ6hclGd6Iz0sUYfdxJE78esmZWvlHTyg-PEnK0Tje7GLzy4MYGVr_Q1yGGH1wjECUPdz_w&usqp=CAc',
    price: 20.6,
  },
  {
    id: 6,
    name: 'Bread',
    description: '250 g',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1yK2HOFtUJgfNvOU6205OSpxsd4A4WL3DA&usqp=CAU',
    price: 2.6,
  },
  {
    id: 7,
    name: 'Orange Juice',
    description: '500 ml',
    img_url:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQP3r_7eJ6hclGd6Iz0sUYfdxJE78esmZWvlHTyg-PEnK0Tje7GLzy4MYGVr_Q1yGGH1wjECUPdz_w&usqp=CAc',
    price: 20.6,
  },
  {
    id: 8,
    name: 'Bread',
    description: '250 g',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1yK2HOFtUJgfNvOU6205OSpxsd4A4WL3DA&usqp=CAU',
    price: 2.6,
  },
  {
    id: 9,
    name: 'Orange Juice',
    description: '500 ml',
    img_url:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQP3r_7eJ6hclGd6Iz0sUYfdxJE78esmZWvlHTyg-PEnK0Tje7GLzy4MYGVr_Q1yGGH1wjECUPdz_w&usqp=CAc',
    price: 20.6,
  },
  {
    id: 10,
    name: 'Bread',
    description: '250 g',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1yK2HOFtUJgfNvOU6205OSpxsd4A4WL3DA&usqp=CAU',
    price: 2.6,
  },
  {
    id: 11,
    name: 'Orange Juice',
    description: '500 ml',
    img_url:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQP3r_7eJ6hclGd6Iz0sUYfdxJE78esmZWvlHTyg-PEnK0Tje7GLzy4MYGVr_Q1yGGH1wjECUPdz_w&usqp=CAc',
    price: 20.6,
  },
  {
    id: 12,
    name: 'Bread',
    description: '250 g',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1yK2HOFtUJgfNvOU6205OSpxsd4A4WL3DA&usqp=CAU',
    price: 2.6,
  },
];

/**
 * Exemplo simulado de como pode ser a tradução
 * dos itens vindos da API, para isso deve ser
 * usado um serviço de proxy Translate que possa
 * retornar os dados traduzidos em tempo real
 */
export function proxyAPITranslate(language, data) {
  function translate(term) {
    if (language === 'ptBr') {
      switch (term) {
        case 'Bread':
          return 'Pão';
        case 'Orange Juice':
          return 'Suco de Laranja';
      }
    }
    return term;
  }

  return data.map((item) => ({
    ...item,
    name: translate(item.name),
  }));
}
