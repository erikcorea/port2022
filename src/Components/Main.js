import React from 'react';
import '../Styling/main.css';

function Main() {
  return (
    <div className='main-container'>
        <h1>HI, MY NAME IS <span className='erik'>ERIK CORREA</span>.</h1>
        <h2>SOFTWARE ENGINEER</h2>
        <div className='nav-container'>
            <button className='nav-btns'>Home</button>
            <button className='nav-btns'>About</button>
            <button className='nav-btns'>Projects</button>
            <button className='nav-btns'>Contact</button>
        </div>
    </div>
  )
}

export default Main