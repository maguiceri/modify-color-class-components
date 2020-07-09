import React from 'react';
import Card from '../Card';

class InnerCarousel extends React.Component {
    render() {
        const { items } = this.props
        return(
            
            <div>
                {items.map ((value, key) => {
                    return (
                        <Card key={key} item={value} />
                    )
                }) }
 
            </div>
        )
    }
}

export default InnerCarousel;