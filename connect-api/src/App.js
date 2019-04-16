import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#.m">Call API</a>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#.m">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#.m">Product Manager</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <button type="button" className="btn btn-primary mb-3 mt-5">
            Thêm sản phẩm
          </button>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>No.</th>
                <th>Code</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>Daniel Wellington</td>
                <td>690</td>
                <td>
                  <label className="btn-warning p-2">Out of stock</label>
                </td>
                <td>
                  <button type="button" className="btn btn-success">Update</button>
                  <button type="button" className="btn btn-danger">Remove</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>Daniel Wellington</td>
                <td>690</td>
                <td>
                  <label className="btn-info p-2">Have stock</label>
                </td>
                <td>
                  <button type="button" className="btn btn-success">Update</button>
                  <button type="button" className="btn btn-danger">Remove</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>Daniel Wellington</td>
                <td>690</td>
                <td>
                  <label className="btn-warning p-2">Out of stock</label>
                </td>
                <td>
                  <button type="button" className="btn btn-success">Update</button>
                  <button type="button" className="btn btn-danger">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
