// @ts-ignore
import faker from 'faker';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  quantity: number;
}

interface Database {
  products: Product[];
}

const db: Database = {products: []};

for (let i = 1; i <= 300; i++) {
  const newProduct: Product = {
    id: i,
    name: faker.address.city(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?gym",
    quantity: faker.random.number()
  };
  db.products.push(newProduct);
}

console.log(JSON.stringify(db));
