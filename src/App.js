import React from 'react';
import Carousel from './components/Carousel';

class App extends React.Component{

  render(){

    const items = [
        {
            img: " ",
            title: "primer producto",
            price: 10
        },
        {
            img:" ",
            title: "segundo producto",
            price:65
        }
       
    ]


    return(
        <div>
        <Carousel title="carusel 1" items={items} />
        
        
        </div>
    )
}
}

export default App;