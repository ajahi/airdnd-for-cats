import React, { Component, useState } from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Card from './components/Card';
import Footer from './components/Footer';
import Modal from './components/Modal';

const dummyData = [
  {
    id:1,
    imageUrl: "https://i.imgur.com/iRNNT6R.jpeg",
    name: "Mr. Suri",
    description:"Allow me to introduce you to Mr. Suri, the grumpy cat sensation! He's got the grumpiest face you've ever seen, capable of making even the sun hide behind a cloud. But here's the thing – beneath that grumpy exterior, he's a mischievous little rascal. You'll catch him sneaking around, batting at toys with the precision of a stealthy ninja. And when he's feeling extra sassy, he'll show off his belly-flopping skills that are simply too cute to resist. Get ready for some grumpy yet heartwarming moments with Mr. Suri, the master of grumpiness who'll have you smiling from ear to ear.",
    price: 9.99,
  },
  {
    id:2,
    imageUrl: "https://i.imgur.com/qPQkV7H.jpeg",
    name: "Mr. Whiskers",
    price: 19.99,
    description:"Let me introduce you to the one and only Mr. Whiskers, the curious cat on a quest for knowledge! With eyes as wide as saucers and a twitching tail, he's the epitome of feline curiosity. Every nook and cranny in the house becomes his personal investigation zone, as he explores with the enthusiasm of a detective on a mission. Watch out for his signature `whisker wiggle` when he's onto something fascinating! Beneath that inquisitive nature, he's a true cuddle connoisseur, always ready to curl up in your lap for a cozy snuggle session. Get ready for a whirlwind of curiosity and cuddles with Mr. Whiskers, the feline explorer who'll leave you amazed and charmed by his insatiable sense of wonder.",

  },
  {
    id:3,
    imageUrl: "https://i.imgur.com/YcpXmgW_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    name: "Mr. Khaire",
    price: 14.99,
    description:"Introducing Khaire, the ever-vigilant cat! With watchful eyes and attentive ears, he's a true protector. But beneath his alert exterior lies a loving and affectionate companion. Get ready for a loyal and caring experience with Khaire, the guardian with a heart of gold."
  },
  {
    id:4,
    imageUrl: "https://i.imgur.com/BWwEi77_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    name: "Mr Cool",
    price: 24.99,
    description:"He is the coolest cat you will ever meet. He is laid back as a lawn chair, chill as a cold beer and he knows it. He comes and goes as he please, as the wind he is."
  },
  {
    id:5,
    imageUrl: "https://i.imgur.com/AnUSgAz_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    name: "Mr.Leo",
    price: 29.99,
    description:" Introducing Mr. Leo he has the charm of Shimba and wants to show you his kingdom. "
  },
  {
    id:6,
    imageUrl: "https://i.imgur.com/AnUSgAz_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    name: "Mr Leo 2",
    price: 29.99,
    description:" Introducing Mr. Leo2 is twin of Mr. Leo. "

  },
  
];

function App() {
  const [modal,setModal]=useState(false);
  const [selectedCat,SetSelectedCat]=useState();

  const toggleModal=(cat)=>{
    setModal(!modal)  
    SetSelectedCat(cat)
  }
  
  

  return ( <div>
    {modal &&  <Modal toggleModal={toggleModal} selectedCat={selectedCat}/> }
    <Navbar/>
    
    <Herosection/>
    
    <section className='cardSection'>
      
      {dummyData.map(cat=>(
        <div key={cat.id} onClick={()=>toggleModal(cat)}>
          <Card 
          key={cat.id}
          {...cat}
        />
          </div>
        ))}
      
      
        
      
      
      
    </section>

    <Footer />
  </div> );
}

export default App ;