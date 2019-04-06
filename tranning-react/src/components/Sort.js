import React, { Component } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { connect } from 'react-redux';

import * as actions from './../actions/index';

class Sort extends Component {
  onClick = (sortBy, sortValue) => {
    this.props.onSort({
      by: sortBy,
      value: sortValue
    });
  }

  render() {

    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          <i className="mdi mdi-filter-outline mr-1" />
          Sort Item
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={() => this.onClick('name', 1)}>
            Name, A - Z
            { (this.props.sort.by === 'name' && this.props.sort.value === 1)
              ? <i className="mdi mdi-check ml-3 mdi-18px" /> 
              : ''
            }
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.onClick('name', -1)}>
            Name, Z - A
            { (this.props.sort.by === 'name' && this.props.sort.value === -1)
              ? <i className="mdi mdi-check ml-3 mdi-18px" /> 
              : ''
            }
          </MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem onClick={() => this.onClick('status', 1)}>
            Status, Active
            { (this.props.sort.by === 'status' && this.props.sort.value === 1)
              ? <i className="mdi mdi-check ml-3 mdi-18px" /> 
              : ''
            }
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.onClick('status', -1)}>
            Status, Private
            { (this.props.sort.by === 'status' && this.props.sort.value === -1)
              ? <i className="mdi mdi-check ml-3 mdi-18px" /> 
              : ''
            }
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    )
  }
}

const mapStateToProps = state => {
  return {
    sort: state.sort
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: (sort) => {
      dispatch(actions.sortTask(sort));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);