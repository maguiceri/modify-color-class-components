import React from 'react';
import './style.scss';

class Title extends React.Component {
    render(){
        return(
            <span className="title">{this.props.content}</span>
        )
    }
}

export default Title;