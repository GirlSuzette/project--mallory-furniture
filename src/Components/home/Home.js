import React, { Component } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import Header from '../header/Header'

export default class Home extends Component {

    render() {
        return (
            <article>
                <Header />
                <section className="product">
                    <h2 >Featured Products</h2>
                    <span className='subTitle'>Check out some of our favorite listings</span>
                </section>
                <section>
                    <div className="btnsHome">
                        <Link to='/all-products'><p className="btnAll">All Products</p></Link>
                    </div>
                </section>
                <section className="sectionInfo">
                    <h2 >Browse by Categories</h2>
                    <span className='subTitle'>Explore by furniture type</span>

                    <div className="btnsHome">
                        <Link to='/category/Seating'><span className="btonCategory">Seating</span></Link>
                        <Link to='/category/Tables'><span className="btonCategory">Tables</span></Link>
                        <Link to='/category/Desks'><span className="btonCategory">Desks</span></Link>
                        <Link to='/category/Bedroom'><span className="btonCategory">Bedroom</span></Link>
                        <Link to='/category/Storage'><span className="btonCategory">Storage</span></Link>
                        <Link to='/category/Misc'><span className="btonCategory">Misc</span></Link>
                    </div>
                </section>
            </article>
        );
    }
}