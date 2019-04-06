import React, { Component  } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { connect } from 'react-redux';

import TaskForm from './components/TaskForm';
import TaskBoard from './components/TaskBoard';
import Search from './components/Search';
import Sort from './components/Sort';

import * as actions from './actions/index';


import './App.css';

class App extends Component {
  onToggleForm = () => {
    var { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== '') {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    });
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }

  render() {
    var { isDisplayForm } = this.props;

    return (
      <div className="App">
        <MDBContainer>
          <h1 className="text-center mb-2 mt-2">Todo List</h1>

          <MDBRow>
            <MDBCol sm={ isDisplayForm === true ? "4" : "" }>
              <TaskForm />
            </MDBCol>

            <MDBCol sm={ isDisplayForm === true ? "8" : "12" }>
              <MDBBtn 
                className="mb-3" 
                color="primary"
                onClick={ this.onToggleForm }
              >
                <i className="mdi mdi-plus mdi-18px mr-1" />
                Add Item  
              </MDBBtn>

              <MDBRow className="mb-3">
                <MDBCol>
                  <Search />
                </MDBCol>
                <MDBCol>
                  <Sort />
                </MDBCol>
              </MDBRow>

              <TaskBoard /> 

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
