import React, { Component } from 'react'
export default class BaitapChonxe extends Component {

    state = {
        imgSrc: "./img/CarBasic/products/red-car.jpg",

    }
    handlechangecolor = (color) => {
        this.setState = {
            imgSrc: `./img/CarBasic/products/${color}-car.jpg`
        }
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={this.state.imgSrc} alt="...." />
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">exter</div>
                            <div className="card-body">
                                <div className="row" style={{ cursor: 'pointer' }} onClick={() => {
                                    this.setState({
                                        imgSrc: "./img/CarBasic/products/black-car.jpg"
                                    })
                                }}>
                                    <div className="col-2">
                                        <img className="w-100" src="./img/CarBasic/icons/icon-black.jpg" alt="" />
                                    </div>
                                    <div className="col-10 d-flex">
                                        Black Color
                                    </div>
                                </div>
                                <div className="row" style={{ cursor: 'pointer' }} onClick={() => {
                                    this.setState({
                                        imgSrc: "./img/CarBasic/products/red-car.jpg"
                                    })
                                }}>
                                    <div className="col-2">
                                        <img className="w-100" src="./img/CarBasic/icons/icon-red.jpg" alt="" />
                                    </div>
                                    <div className="col-10 d-flex">
                                        Red Color
                                    </div>
                                </div>
                                <div className="row" style={{ cursor: 'pointer' }} onClick={() => {
                                    this.setState({
                                        imgSrc: "./img/CarBasic/products/silver-car.jpg"
                                    })
                                }}>
                                    <div className="col-2">
                                        <img className="w-100" src="./img/CarBasic/icons/icon-silver.jpg" alt="" />
                                    </div>
                                    <div className="col-10 d-flex">
                                        Silver Color
                                    </div>
                                </div>
                                <div className="row" style={{ cursor: 'pointer' }} onClick={() => {
                                    this.setState({
                                        imgSrc: "./img/CarBasic/products/steel-car.jpg"
                                    })
                                }}>
                                    <div className="col-2">
                                        <img className="w-100" src="./img/CarBasic/icons/icon-steel.jpg" alt="" />
                                    </div>
                                    <div className="col-10 d-flex">
                                        Steel Color
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                Wheels
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
