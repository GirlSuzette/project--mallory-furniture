import React from 'react';
import './Navegation.css';
import { NavLink, Link } from 'react-router-dom';
import logoWhite from '../images/mf-logo-white.svg'


const Navegation = (props) => {

    return (
        <nav className='navegacion'>
            <div className='menuNav'>
                <Link to='/'> <img src={logoWhite} alt='logo imagen' /></Link>
                <Link to="/about">About</Link>
                <Link to="/terms">Terms+Conditions</Link>
                <NavLink to={'null'} activeClassName='activo'>|</NavLink>
                <NavLink className='navBlue' to={'/all-products'} activeClassName='activo'>All</NavLink>
                <NavLink className='navBlue' to={'/category/Seating'} activeClassName='activo'>Seating</NavLink>
                <NavLink className='navBlue' to={'/category/Tables'} activeClassName='activo'>Tables</NavLink>
                <NavLink className='navBlue' to={'/category/Desks'} activeClassName='activo'>Desks</NavLink>
                <NavLink className='navBlue' to={'/category/Storage'} activeClassName='activo'>Storage</NavLink>
                <NavLink className='navBlue' to={'/category/Bedroom'} activeClassName='activo'>Bedroom</NavLink>
                <NavLink className='navBlue' to={'/category/Miscellaneous'} activeClassName='activo'>Misc</NavLink>
                <NavLink to={'null'} activeClassName='activo'>|</NavLink>
                <button className='addCarts' onClick={props.handleClickShow}><span>{props.carts.length}</span><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
            </div>
        </nav>
    )
}

export default Navegation;
