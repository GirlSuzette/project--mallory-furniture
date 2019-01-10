import React, { Component } from 'react';
import './product.css';
import axios from 'axios';

export default class Product extends Component {
    constructor(props) {
        super();
        this.state = {
            products: [],
            _id: props.match.params.productId,
        };
    }

    handleClickBtnAdd = (product) => {
        const { addCars } = this.props;
        addCars(product);
    };


    getProducts() {
        axios.get(`https://mallory-furniture-admin.now.sh/api/v1/products/${this.state._id}`)
            .then(response => {
                this.setState({
                    products: response.data,
                })

            })
    }

    componentDidMount() {
        this.getProducts();
    }
    render() {
        return (
            <article >
                <section className='containerProd'>
                    <div className='productImg'>
                        <img src={this.state.products.imageLink} alt='' />
                    </div>
                    <div className='infoProduct'>
                        <div className='desc'>
                            <p className='descItem'>{this.state.products.item}</p>
                            <p className='descPrice'> $ {this.state.products.price}.00</p>
                        </div>
                        <div className='descProd'>
                            <div className='descProd1'>
                                <p>Condition:</p>
                                <p>{this.state.products.condition}</p>
                            </div>
                            <div className='descProd1'>
                                <p>Measuarements:</p>
                                <p>W: {this.state.products.width} L:{this.state.products.length} H:{this.state.products.height}</p>
                            </div>
                            <button className="addToCart" onClick={() => this.props.addCars(this.state.products)}><strong>Add To Cart</strong></button>
                        </div>
                    </div>
                    <div>

                    </div>
                </section>
            </article >
        )
    }
}
