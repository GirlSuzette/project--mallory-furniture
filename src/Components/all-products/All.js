import React, { Component } from 'react';
import axios from 'axios';
import './all.css'
import { Link } from 'react-router-dom';

export default class All extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            product: [],
            showColor: false
        };
    }


    getProducts() {
        axios.get(`https://mallory-furniture-admin.now.sh/api/v1/products`)
            .then(response => {
                this.setState({
                    products: response.data,
                    product: response.data

                })

            })
    }

    componentDidMount() {
        this.getProducts();
    }

    filterStatus = (e) => {
        this.setState({
            showColor: true
        })
        var oneInfo = e.currentTarget.textContent.split(' ')
        var newInfo = oneInfo[0].toLowerCase();
        var newString = [...newInfo, oneInfo[1]]
        newString = newString.join('');
        var original = this.state.product

        if (newString === 'onSale') {
            const filterProduct = original.filter(e => e.onSale === true);

            this.setState({
                products: filterProduct
            })
        } else {
            this.setState({
                products: []
            });
            this.setState({
                products: original,
                showColor: false
            })
        }

    }

    render() {
        return (
            <article className="allContainer">
                <h2 className='allTitle'>All products</h2>
                <p className='subAllTitle'>All available listings</p>
                <div className='infoAll'>
                    <div className='btnCategory'>
                        <button className={(!this.state.showColor) ? 'btnAlls is-visibles' : 'btnAlls'} onClick={this.filterStatus}>All Items</button>
                        <button className={(this.state.showColor) ? 'btnOn is-visibles' : 'btnOn'} onClick={this.filterStatus}>On Sale</button>
                    </div>
                    <p className="counterTitle"><strong className='total'>{this.state.products.length} </strong>items showing</p>
                </div>
                <ul className='products'>
                    {this.state.products.map(product => {
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

            </article>
        );
    }
}