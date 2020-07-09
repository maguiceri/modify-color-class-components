import React from 'react';
import './style.css';

class Card extends React.Component{
    constructor (props) {
        super(props);
    
        this.state = {
            like: 'No me gusta',
            color: 'black'
        }
    }

    handleClick() {
        if (this.state.like == 'Me gusta') {
            this.setState({
                like: 'No me gusta',
                color: 'black'
            })
        } else {
            this.setState({
                like: 'Me gusta',
                color: 'red'
            })
        }
    }
    render(){
        return(
            <div>
            <p className={this.state.color}>{this.state.like}</p>
            <button onClick={() => this.handleClick()}>Darle like</button>
            <img src={this.props.item.img}/>
            <p>Title: {this.props.item.title}</p>
            <p>Precio: ${this.props.item.price} </p>
        </div>
        )
    }
}

export default Card;