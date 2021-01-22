import React from 'react';


class TodoForm extends React.Component {
    // Constructor with state
    constructor() {
      super();
      this.state = {
        inputValue: ""
      }
    }
  
    handleChanges = e => {
      this.setState({
        inputValue: e.target.value
      });
    };
  
    // class property to submit form
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.handleTaskAdd(this.state.inputValue);
      this.setState({
        inputValue:""
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
          <input value={this.state.inputValue} onChange={this.handleChanges} type="text" name="item" />
          <button>Add</button>
        </form>
      );
    }
  }
  
  export default TodoForm;