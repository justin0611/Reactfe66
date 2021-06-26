import React, { Component } from 'react'
export default class HandleEvent extends Component {
    showMess = () => {
        alert('aaaaaaaaaa');
    }
    showtitle = (tenlop) =>{
        alert(`hello ${tenlop}`);
    }
    render() {
        const name = 'thi';
        const handleClick = (event) => {
            alert('Hello');
        }
        return (
            <div className="container">
                xu ly su kien
                <button id="btnClick" onClick={handleClick} >Click me</button>
                <button onClick={() => {
                    alert(`hello ${name}`)
                    this.showtitle('ngon lanh')
                }} >Click messs</button>
            </div>

        )
    }
};
