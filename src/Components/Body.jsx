import React from 'react'
import bigcake from '../Imgs/bigcake.png';


const Body = () => {
  return (
    <div >
        <h1 style={{margin:"25px"}}>Bienvenido a <b>Happy Cake</b></h1>
        <span>El lugar de los pasteles felices</span>
        <div style={{margin:"35px"}}>
        <img src={bigcake} alt="Big Cake" />
        </div>       
    </div>
  )
}

export default Body