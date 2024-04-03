/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import "./Resultcomponent.css"

export default class Resultpage extends Component {
  render() {
    return (
      <>
      <div className='result-container'>
         <h2 className='heading'>Result</h2>
      <div className='result'>
         <h3 className='status'>You need more Practice</h3>
         <h2 className='score'>Your score is 20%</h2>
         <div className='score-container'>
          <div>
            <p>Total No. of questions</p>
            <p>No. of attempted questions</p>
            <p>No. of correct answers</p>
            <p>No. of wrong questions</p>
          
          </div>
          <div>
            <p>15</p>
            <p>9</p>
            <p>3</p>
            <p>6</p>
          </div>
         </div>
   
      </div>
      <button className='play-again'>Play Again</button>
         <button className='go-back'>Back to home</button>
      </div>
      </>
    )
  }
}