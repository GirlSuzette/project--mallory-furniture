import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../header/Header';




export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            newProducts: [],
            carts: [],
            show: false
        };
    }


    componentDidMount() {
        axios.get(`https://mallory-furniture-admin.now.sh/api/v1/products`)
            .then(response => {
                this.setState({
                    products: response.data
                })
                this.componentHome()
            })

    }

    componentHome = () => {
        var newProducts = [];
        for (var i = 0; i < 6; i++) {
            newProducts.push(this.state.products[i])
        }
        this.setState({
            newProducts: newProducts
        })
    }

    handleClickShow = () => {
        this.setState({
            show: !this.state.show,
            loading: false
        })
    }


    addCars = (product) => {
        this.setState({
            carts: [...this.state.carts, product]

        })

    }

    removeProducts = (_id) => {
        let myArray = this.state.carts.filter(function (obj) {
            if (obj._id !== _id) {
                return obj
            }
        })
        this.setState({
            carts: myArray
        })
    }


    render() {
        return (
            <React.Fragment>
                <article>
                    <Header />
                    <section className="infoPro">
                        <h2 className='title'>Featured Products</h2>
                        <span className='subTitle'>Check out some of our favorite listings</span>


                        <ul className='products'>
                            {this.state.newProducts.map(product => {
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
                        <h2 >Browse by Categories</h2>
                        <span className='subTitle'>Explore by furniture type</span>

                        <div className="btnsHome">
                            <Link to='/category/seating'><p className="btonCategory">Seating</p></Link>
                            <Link to='/category/tables'><p className="btonCategory">Tables</p></Link>
                            <Link to='/category/desks'><p className="btonCategory">Desks</p></Link>
                            <Link to='/category/bedroom'><p className="btonCategory">Bedroom</p></Link>
                            <Link to='/category/storage'><p className="btonCategory">Storage</p></Link>
                            <Link to='/category/miscellaneous'><p className="btonCategory">Misc</p></Link>
                        </div>
                    </section>
                </article>
            </React.Fragment>
        );
    }
}