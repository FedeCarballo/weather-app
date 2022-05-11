import React, {  useState } from 'react'
import axios from 'axios'
import search from './assets/search.png'
import './App.css'
import {BsThermometerSun,BsFillCloudsFill, BsWater} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import Clock from './components/Clock'

function App() {
  const [data, setdata] = useState({})
  const [location,setlocation] = useState('');
  const url= `https://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=es&appid=9159d68dde8c59e8ba2817c591aae402&units=metric`
  const searchLocation = (e) => {
    axios.get(url).then((Response) => {
      setdata(Response.data)
      console.log(Response.data.list[0]);
      console.log(data.list[0].sys);
    }
    )  
    setlocation('')
  }

  return (
    <div className="App">
      <div className='Principal-container'>
       

        {
          data.list ? <div className='c2'>
          
            <div className='temperatura'>
              
              {data.list ?
              <div>
                <h1>{data.list[0].main.temp}°C </h1>
                
                <div className='temp_min_max'>
                  <p>máx: </p> <p> {data.list[0].main.temp_max}°C </p> 
                  <p>mín: </p> <p> {data.list[0].main.temp_min}°C </p> 
                </div>
              </div> : null
              }
            </div> 
        </div>: null 
        }
        {
        data.city ?
          <div className='c3'>
            <h1>{data.city.name} <GoLocation /></h1> 
          </div>
          : null}
         {data.list ?
          <div className='c4'>
              <div className='c4-container'>
                <p>{data.list[0].weather[0].description}</p>
                <img src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon+'.png'}`} alt={data.name}/>
                </div>   
              <Clock />
          </div> : null}
          <div className='c5'>
              <div className='Buscador'>
                  <input value={location} placeholder={'Buscar Ciudad.'} onChange={((e) => {setlocation(e.target.value)})} onClick={searchLocation}/>
                  <button type='submit' value={'Buscar'} onClick={searchLocation}><img src={search} alt={data.name}/></button>
              </div>
              <div className='c5-subcontainer'>
                <hr/>
              {data.list ? 
                <div>
                  <p><BsThermometerSun/> Sensacion: {data.list[0].main.feels_like}°C</p>
                  <p><BsWater /> Humedad: {data.list[0].main.humidity}%</p>
                  <p><BsFillCloudsFill/> Presion: {data.list[0].main.pressure} Hpa</p>
                </div>
              :null
            }
              </div>
          </div>


          <div className='c6'>
          {data.list ? 
                <div>
                  <p><BsThermometerSun/> Sensacion: {data.list[0].main.feels_like}°C </p>
                  <p><BsWater /> Humedad: {data.list[0].main.humidity}% </p>
                  <p><BsFillCloudsFill/> Presion: {data.list[0].main.pressure} Hpa </p>
                </div>
              :null
              }
          </div>


      </div>
    </div>
  );
}

export default App;
