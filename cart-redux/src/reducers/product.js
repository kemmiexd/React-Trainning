var initialState = [
  {
    id: 1,
    name: 'Iphone 7',
    image: '',
    description: 'Của Apple',
    price: 500,
    inventory: 10
  },
  {
    id: 3,
    name: 'Samsung Galaxy',
    image: '',
    description: 'Của Samsung',
    price: 300,
    inventory: 22
  },
  {
    id: 2,
    name: 'Oppo F9',
    image: '',
    description: 'Của Oppo',
    price: 400,
    inventory: 53
  },
];

const product = (state = initialState, action) => {
  switch(action.type) {
    default: 
      return [...state];
  }
}

export default product;