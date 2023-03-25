const faker = require('faker');

let database = {products: []};

for (let i = 1; i<= 300; i++) {
  database.products.push({
    id: i,
    name: faker.address.city(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?gym",
    quantity: faker.random.numeric()
  });
}

console.log(JSON.stringify(database));

