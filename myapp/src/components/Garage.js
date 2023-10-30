
import Car from './Car';
import React, { Component } from 'react';

class Garage extends Component {
    render() {
        
        
        return (
        <div>
        
        {this.props.cars.map(_car =>
            <Car brand={_car.brand} model={_car.model} color={_car.color} id={_car.id}
              delete_car={this.props.delete_car}/>)
            } 
        </div>
        )
    }
}

export default Garage;