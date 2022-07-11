import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import data from './data'

export default function App(){
    const locations = data.map(destination =>{
        return(
            <Main
                key={destination.id}
                destination={destination}
            />
        )
    })
    
    return(
        <div className="container">
            <Navbar />
            {locations}
        </div>
    )
}