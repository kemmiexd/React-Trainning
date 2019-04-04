import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';

import * as actions from './../actions/index';

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  }

  onDeleteItem = () => {
    this.props.onDeleteTask(this.props.task.id);
    this.props.onCloseForm();
  }
  
  onEditTask = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);
  }

  render() {
    const { task, index } = this.props;

    return (
      <tr>
        <td>{ index + 1 }</td>
        <td>{ task.name }</td>
        <td className="text-center"> 
          <h6 
            style={{ cursor: "pointer" }}
            className={ (task.status === true) 
              ? "btn btn-primary pl-2 pr-2 pt-0 pb-0" 
              : "btn btn-danger pl-2 pr-2 pt-0 pb-0" 
            }
            onClick={this.onUpdateStatus}
          >
            {( task.status === true ) ? "Active" : "Private" } 
          </h6>
        </td>
        <td>
          <MDBBtn 
            type="butotn"
            color="success mr-3"
            onClick={this.onEditTask}
          >
            <i className="mdi mdi-pencil mr-1" />
            Update
          </MDBBtn>
          <MDBBtn 
            type="button" 
            color="danger"
            onClick={this.onDeleteItem}
          >
            <i className="mdi mdi-delete mr-1" />
            Remove
          </MDBBtn>
        </td>
      </tr>
    )
  }
}


const mapStateToProps = state => {
  return {

  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id));
    },
    onDeleteTask: (id) => {
      dispatch(actions.deleteTask(id));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);