// @ts-ignore
//import faker from 'faker';
const faker = require('faker');
let db = {gyms: []};
for (let i = 1; i <= 30; i++) {
    db.gyms.push({
      id: i,
      name: faker.address.city(),
      description: faker.lorem.sentences(),
      price: faker.commerce.price(),
      imageUrl: "https://source.unsplash.com/1600x900/?gym",
      quantity: faker.datatype.number()
    });
}
console.log(JSON.stringify(db));
