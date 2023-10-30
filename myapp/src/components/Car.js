import React, { Component } from 'react';

class Car extends Component {
    render() {
        console.log(this.props);
        const {brand, color, model} = this.props
        return (
        <div>
            <p>Brand: {brand}</p>
            <p>Mondel:{model}</p>
            <p>Color: {color}</p>
        </div>
        )
    }
}
