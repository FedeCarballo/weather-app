import React, {  useState } from 'react'
import CustomWeather from './components/CustomWeather'

import LocationWeather from './components/LocationWeather'

import './App.css'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
     <Routes>
       <Route path="/Search" element={ <CustomWeather /> } />
       <Route path="/" element={ <LocationWeather /> } />
     </Routes>
    </div>
  );
}

export default App;
