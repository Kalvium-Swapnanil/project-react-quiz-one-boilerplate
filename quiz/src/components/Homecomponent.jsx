/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import "./Homecomponent.css"

export default class Homepage extends Component{
 render(){
    return(
        <>
        <div className='container'>
        <h2 className='quizz'>Quizz App</h2>
            <button className='play'>Play</button>
        </div>
        </>
    )
 }

}