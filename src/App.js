import React from 'react';
import "./App.scss"
import Carousel from './components/Carousel';

class App extends React.Component{
    render(){
        const items = [
            {
                img: "https://images.unsplash.com/photo-1630157898026-89e3cd5592c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80",
                title: "primer producto",
                price: 10
            },
            {
                img:"https://images.unsplash.com/photo-1629435896768-eae6535d2ebf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80",
                title: "segundo producto",
                price:65
            }        
        ]
        const items2 = [
            {
                img: "https://images.unsplash.com/photo-1630183477044-f246686aede0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "primer producto",
                price: 10 
            },
            {
                img: "https://images.unsplash.com/photo-1573643808568-4a3c26f3a06b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
                title: "primer producto",
                price: 10
            }
        ]
        return(
            <div className="app">
            <Carousel title="carusel 1" items={items} />  
            <Carousel title="carusel 2" items={items2}  />   
            </div>
        )
    }
}

export default App;