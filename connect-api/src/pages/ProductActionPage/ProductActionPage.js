import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index';

class ProductActionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      chkbStatus: false,
    }
  }

  componentDidMount() {
    var { match } = this.props;

    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkbStatus: itemEditing.status
      })
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  onSave = (e) => {
    e.preventDefault();
    var { id, txtName, txtPrice, chkbStatus } = this.state;
    var { history } = this.props;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    };

    if (id) {
      this.props.onUpdateProduct(product);
      history.goBack();
    } else {
      this.props.onAddProduct(product);
      history.push('/product-list');
    }
  }

  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;

    return (
      <div className="mt-5">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input 
              type="text" 
              className="form-control" 
              id="productName" 
              placeholder="Enter name" 
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Product Price</label>
            <input 
              type="number" 
              className="form-control" 
              id="productPrice" 
              placeholder="Enter price" 
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="productStatus" 
              name="chkbStatus"
              value={chkbStatus}
              onChange={this.onChange}
              checked={chkbStatus}
            />
            <label className="form-check-label" htmlFor="productStatus">Have stock ?</label>
          </div>
          <button type="submit" className="btn btn-primary mr-2">Submit</button>
          <Link to="/product-list" className="btn btn-light">Back</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
