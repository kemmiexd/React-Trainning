import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  onDelete = (id) => {
    if (confirm('Are you sure delete this product?')) { // eslint-disable-line
      this.props.onDelete(id);
    }
  }

  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Have stock" : "Out of stock";
    var statusClass = product.status ? "btn-warning p-2" : "btn-info p-2";

    return (
      <tr>
        <td>{ index + 1 }</td>
        <td>{product.id}</td>
        <td>{ product.name }</td>
        <td>{ product.price }</td>
        <td>
          <label className={ statusClass }>{ statusName }</label>
        </td>
        <td>
          <Link 
            to={`/product/${product.id}/edit`} 
            className="btn btn-success mr-2"
          >
            Update
          </Link>
          <button 
            type="button" 
            className="btn btn-danger" 
            onClick={ () => this.onDelete(product.id) }
          >
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
