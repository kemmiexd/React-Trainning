import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));

var initialState = [
  {
    product: {
      id: 1,
      name: 'Iphone 7',
      image: 'http://euromacvietnam.com/uploads/images/product/1553313374_32464_erm27.jpg',
      description: 'Của Apple',
      price: 500,
      inventory: 10,
      rating: 4
    },
    quantity: 5
  },
  {
    product: {
      id: 3,
      name: 'Samsung Galaxy',
      image: 'http://euromacvietnam.com/uploads/images/product/1553313374_32464_erm27.jpg',
      description: 'Của Samsung',
      price: 300,
      inventory: 22,
      rating: 3
    },
    quantity: 3
  }
];

const cart = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_TO_CART:
      return [...state];
    default: 
      return [...state];
  }
}

export default cart;