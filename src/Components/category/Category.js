import React, { Component } from 'react';
import axios from 'axios';
import './category.css'
import { Link } from 'react-router-dom';


export default class Category extends Component {
    constructor(props) {
        super();
        this.state = {
            products: [],
            product: [],
            showColor: false
        };
        this.componentCategory(props.match.params.categoryType)
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            products: [],
            product: []
        })
        this.componentCategory(newProps.match.params.categoryType)
        return this.state
    }


    componentCategory = (category) => {
        axios.get(`https://mallory-furniture-admin.now.sh/api/v1/products?category=${category.toLowerCase()}`)
            .then(response => {

                this.setState({
                    products: response.data,
                    product: response.data

                })
            })

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
                products: filterProduct,

            })
        } else {
            this.setState({
                products: [],

            });
            this.setState({
                products: original,
                showColor: false

            })
        }

    }
    render() {

        return (
            <article>
                <section id={`${this.props.match.params.categoryType}Banner`} className="catBanner"></section>

                <h2 className='title'>{this.props.match.params.categoryType}</h2>
                <span className='subTitle'>All {this.props.match.params.categoryType} products</span>
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