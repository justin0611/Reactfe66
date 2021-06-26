import React, { Component } from 'react'
export default class Body extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="my-2 px-4 py-5" style={{ backgroundColor: "#f1f1f1" }}>
                        <h1>A Warm Welcome!</h1>
                        <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt eaque magnam voluptatem, quis nobis nesciunt voluptatum blanditiis ipsa ad nisi rem sint at excepturi eius accusantium? Eos, nesciunt excepturi?
                        </p>
                        <button className="btn btn-primary
                        px-3 py-2">Call to action!</button>
                    </div>
                    <div className="d-flex justify-content-between mb-">
                        <div className="card text-center" style={{ width: "23%" }}>
                            <div className="card-img-top d-flex justify-content-center" style={{ width: "100%", height: "150px", backgroundColor: "gray", alignItems: 'center', fontSize: "20px" }}>
                                500 x 325
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> Card Title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt eos in doloremque veritatis aut harum delectus corporis</p>

                            </div>
                            <div style={{ backgroundColor: '#f1f1f1', padding: '10px 0' }}><a href="#" className="btn btn-primary">Go somewhere</a></div>
                        </div>
                        <div className="card text-center" style={{ width: "23%" }}>
                            <div className="card-img-top d-flex justify-content-center" style={{ width: "100%", height: "150px", backgroundColor: "gray", alignItems: 'center', fontSize: "20px" }}>
                                500 x 325
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> Card Title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt eos in doloremque veritatis aut harum delectus corporis</p>

                            </div>
                            <div style={{ backgroundColor: '#f1f1f1', padding: '10px 0' }}><a href="#" className="btn btn-primary">Go somewhere</a></div>
                        </div>
                        <div className="card text-center" style={{ width: "23%" }}>
                            <div className="card-img-top d-flex justify-content-center" style={{ width: "100%", height: "150px", backgroundColor: "gray", alignItems: 'center', fontSize: "20px" }}>
                                500 x 325
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> Card Title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt eos in doloremque veritatis aut harum delectus corporis</p>

                            </div>
                            <div style={{ backgroundColor: '#f1f1f1', padding: '10px 0' }}><a href="#" className="btn btn-primary">Go somewhere</a></div>
                        </div>
                        <div className="card text-center" style={{ width: "23%" }}>
                            <div className="card-img-top d-flex justify-content-center" style={{ width: "100%", height: "150px", backgroundColor: "gray", alignItems: 'center', fontSize: "20px" }}>
                                500 x 325
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> Card Title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt eos in doloremque veritatis aut harum delectus corporis</p>

                            </div>
                            <div style={{ backgroundColor: '#f1f1f1', padding: '10px 0' }}><a href="#" className="btn btn-primary">Go somewhere</a></div>
                        </div>
                    </div>

                </div>
                <div className=" mt-5 text-center bg-dark text-light" style={{ padding: '30px 0', }}>
                    Copyright @ Your Website 2019
                </div>
            </div>
        );
    }
};
