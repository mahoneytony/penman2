import React from 'react';

export class OrderCreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: '',
      topic: '',
    };

    this.handleTopicChange = this.handleTopicChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTopicChange(event) {
    this.setState({topic: event.target.value});
  }

  handleNumberChange(event) {
    this.setState({number: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('form submitted, Topic is', this.state.topic);
    fetch('http://localhost:8000/orders/', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({topic: this.state.topic, number: this.state.number})}).then(res=>res.json())
     .then(res => console.log(res));
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='order topic'
          value={this.state.topic}
          onChange={this.handleTopicChange}/>
        <input
          type='text'
          placeholder='order number'
          value={this.state.number}
          onChange={this.handleNumberChange} />
        <button onClick={this.handleSubmit}>submit</button>
      </form>
    );

  }
}
