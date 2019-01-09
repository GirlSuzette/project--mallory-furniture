import React from 'react';
import './Navegation.css';
import { NavLink, Link } from 'react-router-dom';
import logoWhite from '../images/mf-logo-white.svg'

const Navegation = () => {

    return (
        <nav className='navegacion'>
            <div className='menuNav'>
                <Link to='/'> <img src={logoWhite} alt='logo imagen' /></Link>
                <Link to="/about">About</Link>
                <Link to="/terms">Terms+Conditions</Link>
                <NavLink to={'null'} activeClassName='activo'>|</NavLink>
                <NavLink className='navBlue' to={'/all-products'} activeClassName='activo'>All</NavLink>
                <NavLink className='navBlue' to={'/category/seating'} activeClassName='activo'>Seating</NavLink>
                <NavLink className='navBlue' to={'/category/tables'} activeClassName='activo'>Tables</NavLink>
                <NavLink className='navBlue' to={'/category/desks'} activeClassName='activo'>Desks</NavLink>
                <NavLink className='navBlue' to={'/category/storage'} activeClassName='activo'>Storage</NavLink>
                <NavLink className='navBlue' to={'/category/bedroom'} activeClassName='activo'>Bedroom</NavLink>
                <NavLink className='navBlue' to={'/category/miscellaneous'} activeClassName='activo'>Misc</NavLink>
                <NavLink to={'null'} activeClassName='activo'>|</NavLink>
                <button className='addCarts' ><Link to="#"><span>0</span><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link></button>
            </div>
        </nav>
    )
}

export default Navegation;