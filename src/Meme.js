import React, { useState } from "react";
import "./App.css"
import memesData from "./memesData";


export default function Meme() {

  const [memeImage, setMemeImage] = React.useState("");


  function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMemeImage (memesArray[randomNumber].url)
    

    console.log(url)
  }
  return (
    <main className="main">
      <div className="form">
        <input
          type="text"
          placeholder="Top Text"
          className="form-input"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="form-input"
        />
        <button 
        className="form-button"
        onClick={getMemeImage}
        >Get a new meme image</button>
      </div>
      <div className="meme-image-wrapper"><img className="meme-image" src={memeImage} alt="Meme Img"/></div>
      
    </main>
  )
}