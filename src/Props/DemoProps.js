import React, { Component } from 'react'
import Card from './Card'
import CardFunction from './CardFunction'
export default class DemoProps extends Component {

    arrProduct = [
        { id: 1, name: 'Iphone', price: 1000, image: 'https://picsum.photos/id/10/200/200' },
        { id: 2, name: 'Pixel', price: 1500, image: 'https://picsum.photos/id/30/200/200' },
        { id: 3, name: 'Sony', price: 1200, image: 'https://picsum.photos/id/40/200/200' },
        { id: 4, name: 'Ximaoi', price: 1300, image: 'https://picsum.photos/id/20/200/200' }
    ]

    renderProduct = () => {
        const jsx = this.arrProduct.map((item, index) => {
            return <div className="col-3" key={index}><CardFunction product={item} /></div>
        });
        return jsx
    }
    render() {
        return (
            <div className="container">

                <h3 className="text-center">Shoe Shop</h3>
                <div className="row">
                    {this.renderProduct()}

                </div>
            </div>
        )
    }

};
