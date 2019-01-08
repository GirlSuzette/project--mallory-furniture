import React from 'react';
import './Navegation.css';
import { NavLink, Link } from 'react-router-dom';
import logoWhite from '../images/mf-logo-white.svg'

const Navegation = () => {

    return (
        <nav className='navegacion'>
            <div className='menuNav'>
                <Link to={'/'}> <img src={logoWhite} alt='logo imagen' /></Link>
                <Link to="/about">About</Link>
                <Link to="/terms">Terms+Conditions</Link>
                <NavLink to={'null'} activeClassName='activo'>|</NavLink>
                <NavLink to={'/all-products'} activeClassName='activo'>All</NavLink>
                <NavLink to={'/category/Seating'} activeClassName='activo'>Seating</NavLink>
                <NavLink to={'/category/Tables'} activeClassName='activo'>Tables</NavLink>
                <NavLink to={'/category/Desks'} activeClassName='activo'>Desks</NavLink>
                <NavLink to={'/category/Storage'} activeClassName='activo'>Storage</NavLink>
                <NavLink to={'/category/Bedroom'} activeClassName='activo'>Bedroom</NavLink>
                <NavLink to={'/category/Misc'} activeClassName='activo'>Misc</NavLink>
                <NavLink to={'null'} activeClassName='activo'>|</NavLink>
                <button className='addCarts'><Link to="#"><span>0</span><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link></button>
            </div>
        </nav>
    )
}

export default Navegation;