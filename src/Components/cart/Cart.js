import React, { Component } from 'react';

export default class Cart extends Component {

    render() {
        return (

            <aside>
                <div className="ShoppingCart">
                    <header className="ShoppingCart__header">
                        <div>
                            <h3 className="ShoppingCart__title">Your Cart</h3>
                            <button className="ShoppingCart__close" >
                                <img src="https://cdn3.iconfinder.com/data/icons/interface/100/close_button-512.png" />
                            </button>
                        </div>
                    </header>
                    <div>
                        <ul className="ShoppingCart__list">
                            <li className="Grid Item">
                                <div className="Item__Cover">
                                    <img src='' />
                                </div>
                                <div className="Item__Description">
                                    <div>
                                        <div className="Grid Grid--expanded">
                                            <div>
                                                <h3>ShoppingCart__title</h3>
                                                <span>Item__Description</span>
                                            </div>
                                            <div>
                                                <button ><i className="fa fa-trash" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Grid Grid--expanded Grid--center Item--ts">
                                        <p>$ </p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        })
                        }
          <footer>
                            <div className="Grid Grid--expanded">
                                <span>Subtotal:</span>
                                <strong>$ </strong>
                            </div>
                            <button>Checkout</button>
                        </footer>
                    </div>
                </div>
            </aside>
        );
    }
}