import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { OrdersList } from './components/OrdersComponent';
import { OrderCreateForm } from './components/createOrderComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrderCreateForm />
        <OrdersList />
      </div>
    );
  }
}

export default App;
