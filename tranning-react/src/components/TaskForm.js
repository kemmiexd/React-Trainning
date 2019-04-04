import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      status: false
    }
  }

  componentWillMount() {
    if (this.props.itemEditing && this.props.itemEditing.id !== null) {
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        status: this.props.itemEditing.status,
      });
    } else {
      this.onClear();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status,
      });
    } else {
      this.onClear();
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    var value = target.value;
    name === 'status' && ( value = target.value === 'true' ? true : false);

    this.setState({
      [name]: value
    })
  }

  onSave = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
  }

  render() {
    var { id } = this.state;

    if (!this.props.isDisplayForm) return '';
    return (
      <div style={{
        border: "1px solid #e1e1e1",
        borderRadius: 5,
      }}>
        <h6 style={{padding: " 10px 15px", background: "#f4f4f4"}}>
          { id ? 'Edit Item' : 'Add Item' }
          <span 
            style={{float: "right", cursor: "pointer", marginTop: "-5px"}} 
            className="mdi mdi-close mdi-24px"
            onClick={ this.onCloseForm }
          >
          </span>
        </h6>
        <form className="p-3" onSubmit={this.onSave}>
          <div className="grey-text">
            <input 
              className="form-control mb-3" 
              type="text" 
              placeholder="Name" 
              aria-label="Name" 
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />

            <select 
              className="browser-default custom-select"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Active</option>
              <option value={false}>Private</option>
            </select>
          </div>
          <div className="text-center mb-3 mt-3">
            <MDBBtn type="submit" color="success mr-3">
              <i className="mdi mdi-donkey mr-1" />
              Save
            </MDBBtn>
            <MDBBtn 
              color="danger"
              type="button"
              onClick={this.onClear}
            >
              <i className="mdi mdi-cancel mr-1" />
              Cancel
            </MDBBtn>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
