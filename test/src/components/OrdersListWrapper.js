import React from 'react';
import { SimpleOrder } from './SimpleOrder';

export class OrdersListWrapper extends React.Component {

  // this.props.orders.map(
  //   (order) => {
  //     console.log(order.topic);
  //     return <SimpleOrder order={order} />
  //   }
  // )

  render() {
    this.props.orders.map((order) => {return <SimpleOrder order={order} />})
  }
}
