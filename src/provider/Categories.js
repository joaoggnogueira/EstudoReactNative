import CategoryModel from '../lib/CategoryModel';

const categories = [];

categories.push(
  new CategoryModel(
    -1,
    'cafés',
    3,
    'https://www.stylist.co.uk/images/app/uploads/2021/10/04235250/lakeland.png?w=1200&h=1&fit=max&auto=format%2Ccompress',
    true,
    8,
  ),
);

categories.push(
  new CategoryModel(
    4,
    'lanches naturais',
    4,
    'https://st.depositphotos.com/3220235/4200/i/600/depositphotos_42001037-stock-photo-long-baguette-sandwich-with-lettuce.jpg',
    true,
    5,
  ),
);

categories.push(
  new CategoryModel(
    0,
    'salgados',
    5,
    'https://salgadosdesucesso.com.br/wp-content/uploads/2019/02/como-modelar-a-coxinha.jpg',
    true,
    12,
  ),
);
categories.push(
  new CategoryModel(
    1,
    'refrigerantes',
    6.25,
    'https://www.botecogois.com.br/wp-content/uploads/2021/01/coca-lata.jpg',
    true,
    6,
  ),
);
categories.push(
  new CategoryModel(
    2,
    'sucos 350ml',
    4.5,
    'https://i.ytimg.com/vi/l-ugehIu0iY/maxresdefault.jpg',
  ),
);

categories.push(
  new CategoryModel(
    3,
    'doces',
    2,
    'https://cdn.planetradio.co.uk/one/media/5ea0/39da/090a/637d/4b9c/4ace/chocolate-bars.jpg',
    true,
    23,
  ),
);

categories.push(
  new CategoryModel(
    5,
    'agua  mineral',
    3,
    'https://www.uberlandia.mg.gov.br/wp-content/uploads/2020/05/Prefeitura-recebe-doa%C3%A7%C3%A3o-de-mais-75-mil-garrafas-de-%C3%A1gua-da-Uberl%C3%A2ndia-Refrescos.jpg',
  ),
);

categories.push(
  new CategoryModel(
    6,
    'sorvetes',
    3,
    'https://media-cdn.tripadvisor.com/media/photo-p/16/2b/e6/de/sabores-variados-de-sorvete.jpg',
    true,
    6,
  ),
);

export default categories;
