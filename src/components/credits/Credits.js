import React from 'react'
import "./Credits.css"
const Credits = () => {
    return (
        <div className='credits-container'>
            <div className='credits_item-container'>
                <span className='credits_item-title'>DIRECTED BY</span>
                <span className='credits_item-name'>ELSI MIZAEV</span>
            </div>
            <div className='credits_item-container'>
                <span className='credits_item-title'>WEB DEVELOPER</span>
                <span className='credits_item-name'>MUKHAMMAD MIZAEV</span>
            </div>
            <div className='credits_item-container'>
                <span className='credits_item-title'>WEB DESIGNER</span>
                <span className='credits_item-name'>MUKHAMMAD MIZAEV</span>
            </div>
            <div className='credits_item-container'>
                <span className='credits_item-title'>ART DIRECTION</span>
                <span className='credits_item-name'>ELSI MIZAEV</span>
            </div>
        </div>
    );
}

export default Credits;