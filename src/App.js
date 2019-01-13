import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navegation from './Components/navegation/Navegation';
import Footer from './Components/footer/Footer'
import Home from './Components/home/Home';
import About from './Components/about/About';
import Terms from './Components/terms/Terms';
import Product from './Components/product/Product';
import Category from './Components/category/Category';
import All from './Components/all-products/All';
import Cart from './Components/cart/Cart';
import MenuApp from './Components/MenuMovil/MenuMovil';



class App extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      newProducts: [],
      carts: [],
      show: false,
      error: false,
      quantity: 0
    };
  }


  componentDidMount() {
    axios.get(`https://mallory-furniture-admin.now.sh/api/v1/products`)
      .then(response => {
        this.setState({
          products: response.data
        })
        this.componentHome()
      })

  }

  componentHome = () => {
    var newProducts = [];
    for (var i = 0; i < 6; i++) {
      newProducts.push(this.state.products[i])
    }
    this.setState({
      newProducts: newProducts
    })
  }

  handleClickShow = () => {
    this.setState({
      show: !this.state.show,
      loading: false
    })
  }


  addCars = (product) => {
    var quantity = this.state.carts.filter(products => {
      return product._id === products._id

    })

    product.counter = quantity.length + 1

    this.setState({
      carts: [...this.state.carts, product]
      // quantity: quantity.length + 1
    })
  }



  removeProducts = (_id) => {
    let myArray = this.state.carts.filter(function (obj) {
      if (obj._id !== _id) {
        return obj
      }
    })
    this.setState({
      carts: myArray
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navegation
          handleClickShow={this.handleClickShow}
          carts={this.state.carts}
        />
        <Cart
          removeProducts={this.removeProducts}
          show={this.state.show}
          handleClickShow={this.handleClickShow}
          carts={this.state.carts}
          quantity={this.state.quantity}
        />
        <Switch>
          <Route exact path='/' render={() => (
            <Home
              newProducts={this.state.newProducts}
              show={this.state.show}
            />
          )} />
          <Route exact path='/about' component={About} />
          <Route exact path='/terms' component={Terms} />
          <Route exact path='/all-products' component={All} />
          <Route path='/product/:productId' render={(props) => (
            <Product
              addCars={this.addCars}
              {...props}
            />
          )} />
          <Route path='/category/:categoryType' component={Category} />
        </Switch>
        <Footer />
        <MenuApp
          handleClickShow={this.handleClickShow}
          carts={this.state.carts}
        />
      </React.Fragment>
    );
  }
}

export default App;
