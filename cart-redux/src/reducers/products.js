var initialState = [
  {
    id: 1,
    name: 'Iphone 7',
    image: 'http://euromacvietnam.com/uploads/images/product/1553313374_32464_erm27.jpg',
    description: 'Của Apple',
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 3,
    name: 'Samsung Galaxy',
    image: 'http://euromacvietnam.com/uploads/images/product/1553313374_32464_erm27.jpg',
    description: 'Của Samsung',
    price: 300,
    inventory: 22,
    rating: 3
  },
  {
    id: 2,
    name: 'Oppo F9',
    image: 'http://euromacvietnam.com/uploads/images/product/1553313374_32464_erm27.jpg',
    description: 'Của Oppo',
    price: 400,
    inventory: 53,
    rating: 5
  },
];

const products = (state = initialState, action) => {
  switch(action.type) {
    default: 
      return [...state];
  }
}

export default products;