import React from 'react'
export default function CardFunction(props) {

    const product = props.product;
    return (
        <div className="card text-dark my-3">
            <img src={product.image} alt="" />
            <div className="card-body">
                <p className="font-weight-bold"> {product.name}</p>
                <p>Giá: {product.price}</p>
                <a className="btn btn-dark" href="">add to card</a>
            </div>
        </div>
    )

};