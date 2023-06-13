import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Card from './components/Card';
import Footer from './components/Footer';

const dummyData = [
  {
    id:1,
    imageUrl: "https://i.imgur.com/iRNNT6R.jpeg",
    name: "Product 1",
    price: 9.99,
  },
  {
    id:2,
    imageUrl: "https://i.imgur.com/qPQkV7H.jpeg",
    name: "Product 2",
    price: 19.99,
  },
  {
    id:3,
    imageUrl: "https://i.imgur.com/YcpXmgW_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    name: "Product 3",
    price: 14.99,
  },
  {
    id:4,
    imageUrl: "https://i.imgur.com/BWwEi77_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    name: "Product 4",
    price: 24.99,
  },
  {
    id:5,
    imageUrl: "https://i.imgur.com/AnUSgAz_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    name: "Product 5",
    price: 29.99,
  },
  {
    id:6,
    imageUrl: "https://i.imgur.com/AnUSgAz_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    name: "Product 5",
    price: 29.99,
  },
  {
    id:7,
    imageUrl: "https://i.imgur.com/AnUSgAz_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    name: "Product 5",
    price: 29.99,
  },
];

function App() {


  return ( <div>
    <Navbar/>
    
    <Herosection/>
    
    <section className='cardSection'>
      {dummyData.map(cat=>(
        <Card 
        key={cat.id}
        {...cat}/>
      ))}
      
    </section>

    <Footer />
  </div> );
}

export default App ;