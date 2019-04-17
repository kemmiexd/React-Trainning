import React, { Component } from 'react';

class ProductActionPage extends Component {
  render() {
    return (
      <div className="mt-5">
        <form>
          <div class="form-group">
            <label for="productName">Product Name:</label>
            <input type="email" class="form-control" id="productName" placeholder="Enter name" />
          </div>
          <div class="form-group">
            <label for="productPrice">Product Price</label>
            <input type="password" class="form-control" id="productPrice" placeholder="Enter price" />
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="productStatus" />
            <label class="form-check-label" for="productStatus">Have stock ?</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
