import React, { useState } from 'react'
import axios from 'axios'
import search from './assets/search.png'
import './App.css'
function App() {
  const [data, setdata] = useState({})
  const [location,setlocation] = useState('');

  // const url=  `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=es&appid=9159d68dde8c59e8ba2817c591aae402&units=metric`

  const url= `https://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=es&appid=9159d68dde8c59e8ba2817c591aae402&units=metric`

  const searchLocation = (e) => {
    axios.get(url).then((Response) => {
      setdata(Response.data)
      console.log(Response.data);
      }
    )  
  setlocation('')
  }

  return (
    <div className="App">

      <div className='Principal-container'>

        <div className='Buscador'>
          <input value={location} placeholder={'Buscar Ciudad'} onChange={((e) => {setlocation(e.target.value)})}/>
          <button type='submit' value={'Buscar'} onClick={searchLocation}><img src={search} alt={data.name}/></button>
        </div>
        <div>

        </div>
        <div className='container'>
          <div className='top'> 
            <div className='ubicacion'> {
              data.city ?
              <h1>{data.city.name}. ta fresco. abrigate</h1> : null} 
            </div>
            <div className='descripcion'>
              {
                data.weather ? <div> <p>{data.weather[0].description}</p> <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon+'.png'}`} alt={data.name} /> </div>  : null
              }
              {/* data.weather[0].icon+'.png' */}
            </div>
          </div>
          {
            data.main ? 
            <div className='bottom'>
              <div className='ST'>
              <p> sensacion termica: {
                  data.main ? <p>{data.main.feels_like}°C</p> : null
                  } </p>
              </div>
              <div className='humedad'>
                <p> Humedad: {
                  data.main ? <p>{data.main.humidity}%</p> : null
                  }
                </p>        
              </div>
                <div className='vientos'>
              <p>vientos:{
                data.wind ? <p>{data.wind.speed} KM/h</p> : null
                  }
              </p> 
              </div>
              </div> 
          : null
          }

        </div>{
          data.main ?
        <div className='temperatura'>
              {data.main ? <p>{data.main.temp}°C</p>: null }
        </div> : null }
      </div>
      </div>
  );
}

export default App;
