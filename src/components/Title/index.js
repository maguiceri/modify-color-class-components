import React from 'react';
import './style.css';

class Title extends React.Component {
    render(){
        return(
            <span>{this.props.content}</span>
        )
    }
}

export default Title;