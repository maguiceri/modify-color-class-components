import React from 'react';
import './style.scss';

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
            <div className="info">
                    <img className="img" src={item.img}/>
                    <p className="card-title">Title: {item.title}</p>
                    <p className="price">Precio: ${item.price} </p>
                    <div className="like">
                        <p className={this.state.color}>{this.state.like}</p>
                        <button className="button" onClick={() => this.handleClick()}>Like</button>
                    </div>
            </div>
        )
    }
}

export default Card;