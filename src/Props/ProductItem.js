import React from 'react'
export default function ProductItem(props) {

    const product = props.product;
    return (
        <div className="card text-dark my-3">
            <img src={product.image} alt="" />
            <div className="card-body">
                <p className="s"> {product.name}</p>
                <p>{product.price} $</p>
                <a className="btn btn-dark" href=""> add to card</a>
            </div>
        </div>
    )

};