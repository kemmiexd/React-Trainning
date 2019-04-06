import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBInput } from 'mdbreact';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';
import * as actions from './../actions/index';

class TaskBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterName: '',
      filterStatus: -1
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    var filter = {
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus
    }

    this.props.onfilterTable(filter)
    
    this.setState({
      [name]: value
    });


  }

  render() {
    var { tasks, filterTable, keyword, sort } = this.props;
    var { filterName, filterStatus } = this.state;
    
     if (filterTable) {
      if (filterTable.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filterTable.name) !== -1
        });
      }

      tasks = tasks.filter((task) => {
        if (filterTable.status === -1) {
          return task;
        } else {
          return task.status === (filterTable.status === 1 ? true : false)
        }
      });
    }
 
    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1
      });
    }
    
    if (sort.by === 'name') {
      tasks.sort((item1, item2) => {
        if (item1.name > item2.name) return sort.value
        else if (item1.name < item2.name) return -sort.value
        else return 0
      });
    } else {
      tasks.sort((item1, item2) => {
        if (item1.status > item2.status) return -sort.value
        else if (item1.status < item2.status) return sort.value
        else return 0
      });
    }
    
    var elementTasks = tasks.map((task, index) => {
      return <TaskItem 
              key={task.id} 
              index={index} 
              task={task}
            />
    });

    return (
      <MDBTable bordered>
        <MDBTableHead style={{background: "#f4f4f4"}}>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td></td>
            <td>
              <MDBInput 
                hint="Quick Search" 
                type="text" 
                containerClass="mt-0" 
                name="filterName"
                value={filterName}
                onChange={this.onChange}
              />
            </td>
            <td>
              <select 
                className="browser-default custom-select"
                name="filterStatus"
                value={filterStatus}
                onChange={this.onChange}
              >
                <option value="-1">All</option>
                <option value="1">Active</option>
                <option value="0">Private</option>
              </select>
            </td>
            <td></td>
          </tr>
          { elementTasks }
        </MDBTableBody>
      </MDBTable>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filterTable: state.filterTable,
    keyword: state.search,
    sort: state.sort
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onfilterTable: (filter) => {
      dispatch(actions.filterTask(filter));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);
