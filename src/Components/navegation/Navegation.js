import React, { Component } from 'react';
import './Navegation.css';
import { NavLink, Link } from 'react-router-dom';
import logoWhite from '../images/mf-logo-white.svg';
import AnimateHeight from 'react-animate-height';
import Shopping from '../images/meter-en-el-carrito copia.svg'


export default class Navegation extends Component {

    state = {
        height: 0,
    };

    toggle = () => {
        const { height } = this.state;

        this.setState({
            height: height === 0 ? 'auto' : 0,
        });
    };

    render() {
        const { height } = this.state;
        return (

            <div className='openBtns'>
                <div className='MenuHumger'>
                    <button onClick={this.toggle} className='openBtn'>
                        <i class="fa fa-bars" aria-hidden="true"></i>
                        {height === 0 ? '' : ''}
                    </button>
                    <Link className='responItem MenuImg1' to='/'> <img src={logoWhite} alt='logo imagen' /></Link>
                </div>
                <AnimateHeight
                    duration={500}
                    height={height} // see props documentation bellow
                    className='animete'
                >

                    <nav className='navegacion'>
                        <div className='menuNav'>
                            <Link className='responItem menuImg' to='/'> <img src={logoWhite} alt='logo imagen' /></Link>
                            <Link className='responItem' to="/about">About</Link>
                            <Link className='responItem' to="/terms">Terms+Conditions</Link>
                            <NavLink className='responItem center' to='#' activeClassName='activo '>|</NavLink>
                            <NavLink className='navBlue responItem' to={'/all-products'} activeClassName='activo'>All</NavLink>
                            <NavLink className='navBlue responItem' to={'/category/Seating'} activeClassName='activo'>Seating</NavLink>
                            <NavLink className='navBlue responItem' to={'/category/Tables'} activeClassName='activo'>Tables</NavLink>
                            <NavLink className='navBlue responItem' to={'/category/Desks'} activeClassName='activo'>Desks</NavLink>
                            <NavLink className='navBlue responItem' to={'/category/Storage'} activeClassName='activo'>Storage</NavLink>
                            <NavLink className='navBlue responItem' to={'/category/Bedroom'} activeClassName='activo'>Bedroom</NavLink>
                            <NavLink className='navBlue responItem' to={'/category/Miscellaneous'} activeClassName='activo'>Misc</NavLink>
                            <NavLink className='responItem center' to='#' activeClassName='activo'>|</NavLink>
                            <button className='addCarts responItem' onClick={this.props.handleClickShow}><span>{this.props.carts.length}</span> <img src={Shopping} className="ImageMenuMovil" /></button>
                        </div>
                    </nav>
                </AnimateHeight>
            </div>

        )
    }
}

