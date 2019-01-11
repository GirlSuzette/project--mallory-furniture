import React, { Component } from 'react';
import './cart.css'

export default class Cart extends Component {
    handleRemove = (product) => {
        const { removeProducts } = this.props;
        removeProducts(product);
    };

    uniqueProduct = (products) => {
        var filters = products.filter((product, index) => {
            return products.indexOf(product) === index
        })
        return filters
    }

    calculateTotal() {
        const prices = this.props.carts.map(p => p.price);
        return prices.reduce((a, b) => a + b, 0);
    }

    render() {
        return (


            <aside>
                <div className={(this.props.show) ? "ShoppingCart is-visible" : "ShoppingCart"}>
                    <header className="ShoppingCart__header">
                        <div>
                            <h3 className="ShoppingCart__title">Your Cart </h3>
                            <button className="ShoppingCart__close" onClick={this.props.handleClickShow}>
                                <img src="https://cdn3.iconfinder.com/data/icons/interface/100/close_button-512.png" />
                            </button>
                        </div>
                    </header>
                    <div>
                        {this.uniqueProduct(this.props.carts).map(cart => {
                            console.log(cart);
                            return (
                                <ul className="ShoppingCart__list">
                                    <li className="Grid Item">
                                        <div className="Item__Cover">
                                            <img src={cart.imageLink} />
                                        </div>
                                        <div className="Item__Description">
                                            <div>
                                                <div className="Grid Grid--expanded">
                                                    <div>
                                                        <h3>{cart.item}</h3>
                                                    </div>
                                                    <div>
                                                        <button onClick={() => this.handleRemove(cart._id)}><i className="fa fa-trash" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Grid Grid--expanded Grid--center Item--ts">
                                                <select>
                                                    <option>{cart.counter}</option>
                                                </select>
                                                <div>
                                                    <strong>Price</strong>
                                                    <p>$ {cart.price}.00</p>
                                                </div>
                                                <div>
                                                    <strong>Total</strong>
                                                    <p>$ {cart.price * cart.counter}.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            )
                        })
                        }
                        <footer>
                            <div className="Grid Grid--expanded">
                                <span>Subtotal:</span>
                                <strong>$ {this.calculateTotal()}.00</strong>
                            </div>
                            <button>Checkout</button>
                        </footer>
                    </div>
                </div>
            </aside>
        );
    }
}