import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Header from '../header/Header';




export default class Home extends Component {


    render() {
        return (
            <React.Fragment>
                <article>
                    <Header />
                    <section className="infoPro">
                        <h2 className='title'>Featured Products</h2>
                        <span className='subTitle'>Check out some of our favorite listings</span>

                        <ul className='products'>
                            {this.props.newProducts.map(product => {
                                return (
                                    <li key={product._id} className='product'>
                                        <Link className='studentList' to={`/product/${product._id}`}>
                                            <div className='product__img'>
                                                <img src={product.imageLink} alt='' />
                                            </div>
                                            <div className='descProduc' >
                                                <p className='product__name'>{product.item}</p>
                                                <p className='product__price'>$ {product.price}</p>
                                            </div>

                                        </Link>
                                    </li>
                                )
                            })

                            }
                        </ul>
                    </section>
                    <section>
                        <div className="btnsHome">
                            <Link to='/all-products'><p className="btnAll">All Products</p></Link>
                        </div>
                    </section>
                    <section className="sectionInfo">
                        <h2 className='title'>Browse by Categories</h2>
                        <span className='subTitle'>Explore by furniture type</span>

                        <div className="btnsHome">
                            <Link to='/category/Seating'><p className="btonCategory">Seating</p></Link>
                            <Link to='/category/Tables'><p className="btonCategory">Tables</p></Link>
                            <Link to='/category/Desks'><p className="btonCategory">Desks</p></Link>
                            <Link to='/category/Bedroom'><p className="btonCategory">Bedroom</p></Link>
                            <Link to='/category/Storage'><p className="btonCategory">Storage</p></Link>
                            <Link to='/category/Miscellaneous'><p className="btonCategory">Misc</p></Link>
                        </div>
                    </section>
                </article>
            </React.Fragment>
        );
    }
}