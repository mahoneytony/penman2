import React, { Component } from 'react';

class OrderCreationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('form is submitted', this.state.email);
  }

  handleOrderChange(event) {
    console.log('order number was changed', event.target.value);
    this.setState({email: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Order number'
          value={this.state.email}
          onChange={this.handleOrderChange}
        />
        <button>Save</button>
      </form>
    );
  }
}

export default OrderCreationForm;
