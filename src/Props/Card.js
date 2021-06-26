import React, { Component } from 'react'
export default class Card extends Component {
    render() {
        let product = this.props.product;
        return (
            <div className="card bg-dark text-white">
                <img src={product.image} alt="" />
                <div className="card-body">
                    <p className="font-weight-bold">Tên sản phẩm: {product.name}</p>
                    <p>Giá: {product.price}</p>
                </div>
            </div>
        )
    }

};