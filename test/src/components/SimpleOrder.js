import React from 'react';

export class SimpleOrder extends React.Component {
  render() {
    return (
      <div>
        <p>Im simple order, my props is:</p>
//        <p>Topic: {this.props.topic}</p>
        <p>Number: {this.props.order.number}</p>
     </div>
    )
  }
}
