import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Have stock" : "Out of stock";
    var statusClass = product.status ? "btn-warning p-2" : "btn-info p-2";

    return (
      <tr>
        <td>{ index + 1 }</td>
        <td>{ product.id }</td>
        <td>{ product.name }</td>
        <td>{ product.price }</td>
        <td>
          <label className={ statusClass }>{ statusName }</label>
        </td>
        <td>
          <button type="button" className="btn btn-success">
            Update
          </button>
          <button type="button" className="btn btn-danger">
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
