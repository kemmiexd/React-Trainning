import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txtUsername: '',
      txtPassword: ''
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }

  onLogin = (e) => {
    e.preventDefault();
    var { txtUsername, txtPassword } = this.state;
    if (txtUsername === 'admin' && txtPassword === 'admin') {
      localStorage.setItem('user', JSON.stringify({
        username: txtUsername,
        password: txtPassword
      })); 
    }
  }

  render() {
    var { txtUsername, txtPassword } = this.state;
    var loggedInUser = localStorage.getItem('user');
    
    if (loggedInUser !== null) {
      var { location } = this.props;  
      return <Redirect to={{
        pathname: '/products',
        state: {
          from: location
        }
      }} />
    }


    return (
      <div className="container">
        <div className="row">
          <div className="col-6 text-center">
            <form onSubmit={this.onLogin}>
              <h2>Đăng Nhập</h2>
              <div className="form-group">
                <label for="">Username</label>
                <input 
                  type="text" 
                  name="txtUsername" 
                  className="form-control"
                  value={txtUsername}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label for="">Password</label>
                <input 
                  type="password" 
                  name="txtPassword"  
                  className="form-control"
                  value={txtPassword}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>  
        </div>
      </div>
    );
  }
}

export default Login;
