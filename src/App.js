import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navegation from './Components/navegation/Navegation';
import Footer from './Components/footer/Footer'
import Home from './Components/home/Home';
import About from './Components/about/About';
import Terms from './Components/terms/Terms';
import Product from './Components/product/Product';
import Category from './Components/category/Category';
import All from './Components/all-products/All'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navegation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/terms' component={Terms} />
          <Route exact path='/all-products' component={All} />
          <Route path='/product/:productId' component={Product} />
          <Route path='/category/:categoryType' component={Category} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
