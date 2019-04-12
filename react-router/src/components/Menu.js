import React, { Component } from 'react';

import { Route, NavLink } from 'react-router-dom';

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'About',
    to: '/about',
    exact: false
  },
  {
    name: 'Contact',
    to: '/contact',
    exact: false
  },
  {
    name: 'Products',
    to: '/products',
    exact: false
  },
  {
    name: 'Login',
    to: '/login',
    exact: false
  }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route 
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => {
        var active = match ? 'active abc' : '';
        return (
          <li className={active}>
            <NavLink className="nav-link" to={to}>{label}</NavLink>
          </li>
        )
      }}
    />
  )
}

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">Homepage</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            {this.showMenus(menus)}
          </ul>
          <span className="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </nav>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return ( 
          <MenuLink 
            key={index} 
            label={menu.name} 
            to={menu.to} 
            activeOnlyWhenExact={menu.exact} 
          />
        )
      });
    }
    return result;
  }
}

export default Menu;
