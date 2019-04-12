import React, { Component } from 'react';

import { Prompt } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    }
  }

  onClick = (isChecked) => {
    this.setState({
      isChecked: isChecked
    })
  }

  render() {
    var { isChecked } = this.state;
    return (
      <div>
        This is Contact

        <button class="btn btn-primary mt-3 ml-3" onClick={ () => this.onClick(false) }>
                Cho phép <span class="badge badge-primary"></span>
        </button>
        <button class="btn btn-danger mt-3 ml-3" onClick={ () => this.onClick(true) }>
                Không Cho phép <span class="badge badge-danger"></span>
        </button>
        <Prompt 
          when={isChecked}
          message={ location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`) }
        />
      </div>
    );
  }
}

export default Contact;
