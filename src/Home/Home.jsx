import React from 'react'
import { QuoteData } from '../Data';
import { useEffect } from 'react';

const Home = () => {
    const randomQuote = Math.floor(Math.random() * Math.floor(QuoteData.length));

    useEffect(() => {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/1600x900/?')";
      },[]); 

  return (
    <div>
    <h1>{QuoteData[randomQuote].quote}</h1>
    </div>
  )
}

export {Home}