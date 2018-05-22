import React from 'react';
import ReactDOM from 'react-dom';
//import { OrdersListWrapper } from './OrdersListWrapper';

export class OrdersList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
    this.showOrders = this.showOrders.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8000/orders/')
      .then(res => res.json())
      .then(orders => this.setState({
        orders: Array.from(orders),
      }))
  }

  showOrders() {
    this.state.orders.map(
      (order) => {
        console.log(order.topic);
        return order
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Eto ya, eba</h1>
        <h3>A eto orderi </h3>
        <button onClick={this.showOrders}>Show orders</button>      </div>
    );
  };
}
