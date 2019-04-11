import React, { Component } from 'react';

class Product extends Component {
  render() {
    var { match } = this.props;
    var slug = match.params.slug;

    return (
      <div>
        This is Product Detail: {slug}
      </div>
    );
  }
}

export default Product;
