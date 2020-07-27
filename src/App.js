import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import CreateUser from './components/CreateUser';
import CreateOrder from './components/CreateOrder';
import OrderList from './components/OrderList';
import Order from './components/Order'
import CounterList from './components/CounterList';
import Counter from './components/Counter';
import CounterCreate from './components/CounterCreate';
import CounterView from './components/CounterView';

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/counters"component={CounterList}/>
      <Route path="/createCounter" component={CounterCreate}/>
      <Route path="/viewCounter/:id" component={CounterView}/>
      <Route path="/createUser" component={CreateUser}/>
      <Route path="/createOrder" component={CreateOrder}/>
      <Route path="/orderList" component={OrderList}/>
      <Route path="/order/:id" component={Order}/>
      <Route path="/counter/:id" component={Counter}/>
      
    </Router>
  );
}

export default App;
