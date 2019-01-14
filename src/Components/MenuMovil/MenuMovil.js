import React, { Component } from "react";
import { Link } from 'react-router-dom'
import HomeBlue from "../images/app-home-blue.svg";
import ShoppingCart from "../images/meter-en-el-carrito copia.svg";
import Search from '../images/buscar-en-carpeta.svg'

import './menu-app.css';

export default class MenuApp extends Component {
    render() {
        return (
            <div className="MenuMovilWrap">
                <div className="MenuMovilWrapMid">
                    <div className="OptionWrap">
                        <Link className='responItem' to='/'>
                            <div className="OptionCell">
                                <div className="WrappperApp">
                                    <img src={HomeBlue} className="ImageMenuMovil" />
                                    <p className="TextMenu">Inicio</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="OptionWrap">
                        <Link to={'/all-products'}>
                            <div className="OptionCell">
                                <div className="WrappperApp">
                                    <img src={Search} className="ImageMenuMovil" />
                                    <p className="TextMenu">Search All Product</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="OptionWrap">
                        <div className="OptionCell" onClick={this.props.handleClickShow}>
                            <div className="WrappperApp">
                                <img src={ShoppingCart} className="ImageMenuMovil" />
                                {/* <i className="ImageMenuMovil" class="fa fa-cart-arrow-down" aria-hidden="true"></i> */}
                                <p className="TextMenu">Shopping Cart</p>
                                <span>{this.props.carts.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}