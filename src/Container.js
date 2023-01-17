import React from "react"
import "./App.css"
import Header from "./Header";
import Meme from "./Meme";

function Container(){
  return(
    <div className="container">
      <Header/>
      <Meme/>
    </div>
  )
}

export default Container;