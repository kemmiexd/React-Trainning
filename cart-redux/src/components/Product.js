import React, { Component } from "react";

class Product extends Component {
  render() {
    var { product } = this.props

    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img
              src={product.image}
              className="img-fluid"
              alt={product.name}
            />
            <a href="index.html">
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="index.html">{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>
                { this.showRatings(product.rating) }
              </li>
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}</span>
              <span className="right">
                <a
                  href="index.html"
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  showRatings(rating) {
    var result = [];

    for(var star = 1; star <= rating; star++) {
      result.push(<i key={star} className="fa fa-star" />)
    }
    for(var starOutline = 1; starOutline <= (5-rating); starOutline++) {
      result.push(<i key={starOutline + star} className="fa fa-star-o" />)
    }
    
    return result;
  }
}

export default Product;
