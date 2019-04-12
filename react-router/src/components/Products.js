import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import Product from './Product';

class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        name: 'iphone S',
        price: '50k',
        slug: 'iphone'
      },
      {
        id: 2,
        name: 'Samsung E',
        price: '50k',
        slug: 'samsung'
      },
      {
        id: 3,
        name: 'Oppo X',
        price: '50k',
        slug: 'oppo'
      },
    ];

    var { match } = this.props;
    var url = match.url;

    var result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`}  key={index}>
          <div className="col">
            {product.id} - {product.name} - {product.price}
          </div>
        </NavLink>
      )
    });

    var { location } = this.props;

    return (
      <div className="container">
        <h1>Danh sách sản phẩm</h1>
        <div className="row">
            {result}
        </div>
        <div className="row">
          <Route path="/products/:slug" component={Product} />
        </div>
      </div>
    );
  }
}

export default Products;
