import React, { Component } from 'react'
export default class RenderWithState extends Component {

    arrProduct = [
        { id: 1, name: 'iphone', price: 1000, img: 'https://picsum.photos/id/10/200/200' },
        { id: 2, name: 'iphone', price: 1000, img: 'https://picsum.photos/id/10/200/200' },
        { id: 3, name: 'iphone', price: 1000, img: 'https://picsum.photos/id/10/200/200' },
        { id: 4, name: 'iphone', price: 1000, img: 'https://picsum.photos/id/10/200/200' },
    ]
    renderProduct = () => {
        let arrProduct = []
        return []
    }

    // state = {
    //     login : false
    // }

    // userName = 'Nguyen Thanh Thi'
    // renderLogin = () => {
    //     if (this.state.login) {
    //         return <span>{this.userName}</span>
    //     }
    //     return <button className="btn btn-primary" onClick={()=> {
    //         this.handleLogin();
    //     }}>Đăng Nhập</button>
    // }
    // handleLogin = () =>{
    //     let newState = {
    //         login:true
    //     };
    //     this.setState(newState);
    // }

    render() {
        return (
            <div className="container">
                <h3>Danh sach san pham</h3>
                <table className="table"></table>
                <thead>
                    <tr>
                        <th>Ma sp</th>
                        <th>Ten sp</th>
                        <th>Gia sp</th>
                        <th>Hinh anh</th>
                        th
                    </tr>
                </thead>
                <tbody>
                    {this.renderProduct()}
                </tbody>
            </div>

        )
    }
};
