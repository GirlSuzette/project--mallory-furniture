import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    render() {

        return (
            <section className='banner'>
                <h1 className='titleBanner'>Mallory Furniture</h1>
                <p className='subTitleBanner'>Your furniture is old.<br />Ours is older</p>
            </section>
        )
    }
}
export default Header;