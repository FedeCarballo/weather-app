import React, { useEffect } from 'react'
import { useState } from 'react';
import Clock from './Clock';
import {BsThermometerSun,BsFillCloudsFill, BsWater} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import search from '../assets/search.png'
import axios from 'axios';
import './LocationWeather.css'
import { Link } from 'react-router-dom';
function LocationWeather() {
//     const [data, setdata] = useState({})
//     const [latitude, setlatitude] = useState('');
//     const [longitude, setlongitude] = useState('');
//     const url= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=es&appid=9159d68dde8c59e8ba2817c591aae402&units=metric`

//   function success(pos) {
//     var crd = pos.coords;
//     setlatitude(crd.latitude);
//     setlongitude(crd.longitude);
//   }

//  useEffect(() => {
//     axios.get(url).then((Response) => {
//     setdata(Response.data)
//   }
//   )  
// }, [])

const data = 'fino fino señores' // POR FAVOR NO OLVIDAR COMENTAR ESTO CUANDO LA API FUNCIONE

// navigator.geolocation.getCurrentPosition(success);
  return (
    <div className='principal'> 
     <div className='container1'> 
       <div className='d1'>
            <h1>
              Lanus Oeste
            </h1>
         </div>
        <div className='d2'>
          <Link to='/Search'>
            <button className='button'>Busqueda personalizada</button>
          </Link>
        </div>
      </div>
      <div className='container2'>
        <div className='d3'>
          <div>
            <h2>
              20°C  
            </h2> 
          </div>
          <div className='div_p'>
            <p>
             Min 9°C
            </p>
            <p>
             Max 78°C
            </p>
          </div>
        </div>
        <div className='d4'>
          <p>
            Sensacion: 23°C
          </p>
          <p>
            Humedad: 569%
          </p>
          <p>
            Presion: 2042 Hpa
          </p>
        </div>
      </div>
    </div>
  )
}

export default LocationWeather;