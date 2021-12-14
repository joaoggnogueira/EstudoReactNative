import ProductModel from '../lib/ProductModel';
import CategoryModel from '../lib/CategoryModel';

const products = [];
const categories = [];

let actual_category = false;

function category(name, image) {
  actual_category = new CategoryModel(categories.length, name, image);
  categories.push(actual_category);
}

function push(title, price) {
  const product = new ProductModel(
    products.length,
    title,
    price,
    actual_category,
  );
  actual_category.push(product);
  products.push(product);
}

category(
  'cafés',
  'https://www.stylist.co.uk/images/app/uploads/2021/10/04235250/lakeland.png?w=1200&h=1&fit=max&auto=format%2Ccompress',
);

push('Café', 3);
push('Café expresso', 5);
push('Café Capuccino', 6.5);
push('Café Mocaccino', 10);
push('Café Latte macchiato', 10);
push('Café Frappe', 10);
push('Café Mocha', 10);
push('Café Affogato', 10);

category(
  'salgados',
  'https://salgadosdesucesso.com.br/wp-content/uploads/2019/02/como-modelar-a-coxinha.jpg',
);

push('Coxinha de frango', 6.5);
push('Coxinha de carne', 6.5);
push('Bauru', 4);
push('Risolis de Presunto e Queijo', 6.5);
push('Risolis de Carne', 6.5);
push('Quibe', 6.5);
push('Pão de Queijo', 2);
push('Pão com Mortadela', 5);
push('Pão na Chapa', 4);
push('Pão de Queijo grande', 4);
push('Torta', 6.5);

category(
  'bolos',
  'https://www.daninoce.com.br/wp-content/uploads/2020/04/bolo-naked-red-velvet5-960x651.jpg',
);

push('Bolo Floresta Negra Pedaço', 7);
push('Bolo Brigadeiro', 7);
push('Bolo Morango', 7);
push('Bolo de Fubá', 7);
push('Bolo de Milho', 7);

category(
  'refrigerantes',
  'https://www.botecogois.com.br/wp-content/uploads/2021/01/coca-lata.jpg',
);

push('Coca-Cola Lata', 6);
push('Coca-Cola 600ml', 8);
push('Coca-Cola 1L', 10);
push('Coca-Cola 2L', 15);
push('Pepsi Lata', 6);
push('Pepsi 600ml', 8);
push('Pepsi 1L', 10);
push('Pepsi 2L', 15);
push('Guarana Antartica Lata', 5);
push('Guarana Antartica 600ml', 6);
push('Guarana Antartica 1L', 8);
push('Guarana Antartica 2L', 12);

category('sucos 350ml', 'https://i.ytimg.com/vi/l-ugehIu0iY/maxresdefault.jpg');

push('Suco de Laranja 350ml', 5);
push('Suco de Limão 350ml', 5);
push('Suco de Abacaxi 350ml', 5);
push('Suco de Maracuja 350ml', 5);
push('Suco de Laranja com Leite 350ml', 6);
push('Suco de Limão com Leite 350ml', 6);
push('Suco de Abacaxi com Leite 350ml', 6);

category(
  'agua  mineral',
  'https://www.uberlandia.mg.gov.br/wp-content/uploads/2020/05/Prefeitura-recebe-doa%C3%A7%C3%A3o-de-mais-75-mil-garrafas-de-%C3%A1gua-da-Uberl%C3%A2ndia-Refrescos.jpg',
);

push('Agua mineral sem gás 600ml', 2);
push('Agua mineral com gás 600ml', 3);

category(
  'lanches naturais',
  'https://st.depositphotos.com/3220235/4200/i/600/depositphotos_42001037-stock-photo-long-baguette-sandwich-with-lettuce.jpg',
);

push('Baguete de Patê de Frango', 12);
push('Baguete de Peito de Peru', 12);
push('Baguete de Queijo e Presunto', 12);
push('Baguete de Atum', 12);
push('Lanche - Pão Frances', 6);
push('Lanche - Pão de Forma', 4);

category(
  'doces',
  'https://cdn.planetradio.co.uk/one/media/5ea0/39da/090a/637d/4b9c/4ace/chocolate-bars.jpg',
);

push('Snickers', 2.5);
push('Paçoca Grande', 2);
push('Paçoquita', 0.5);
push('m&m', 5);
push('Look', 5);
push('Barra de Chocolate Lacta', 4);
push('Barra de Chocolate Diamente Negro', 4);
push('Lanche - Pão de Forma', 4);
push('Bolacha Passatempo', 4);
push('Bolacha Oreo', 4);
push('Bolacha Waffer Bauduco', 4);

export {products, categories};
