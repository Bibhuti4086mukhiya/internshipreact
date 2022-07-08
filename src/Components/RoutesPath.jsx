import { React} from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './About'
import Card from './Card'
import HomePage from './HomePage'

function RoutesPath() {
  return (
    
    
    <Routes>
    <Route path="/home" element={<HomePage/>} ></Route>
    <Route path="/card" element={<Card/>} ></Route>
    <Route path="/about" element={<About/>} ></Route>        
    </Routes>
  )
}

export default RoutesPath