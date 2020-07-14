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
        const {item} = this.props
        return(
            <div>
            <p className={this.state.color}>{this.state.like}</p>
            <button onClick={() => this.handleClick()}>Darle like</button>
            <img src={item.img}/>
            <p>Title: {item.title}</p>
            <p>Precio: ${item.price} </p>
        </div>
        )
    }
}

export default Card;