import React, { useEffect, useState } from 'react'
import axios from 'axios'
import search from './assets/search.png'
import './App.css'
import video from './assets/video/wallpaper2.mp4'
import {BsThermometerSun,BsFillCloudsFill, BsWater} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'




function App() {
  const [data, setdata] = useState({})
  const [location,setlocation] = useState('');
  const [count, setcount] = useState('');
  const [month,setmonth] = useState('');
  
  // const url=  `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=es&appid=9159d68dde8c59e8ba2817c591aae402&units=metric`

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
  const days=['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb' ]

  const months = ['Ene' , 'Feb' , 'Mar' , 'Abr' , 'May' , 'Jun' , 'Jul' , 'Ago' , 'Sep' , 'Oct' , 'Nov' , 'Dic']
 
  useEffect(() => { setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const minute = time.getMinutes();
    setcount(hour + ':' + minute + ' ')
    setmonth(days[day]+'/'+date+'/'+months[month])
  }, 1000);}, [])

  
console.log(count);
  return (
    <div className="App">
      <div className='Principal-container'>
        <video className='video-bg' src={video} type='video/mp4' autoPlay muted loop></video>
       {
          data.list ? <div className='c2'>
          
            <div className='temperatura'>
              {data.list ?
              <div>
                <h1>{data.list[0].main.temp}°C</h1>
                <div className='temp_min_max'>
                  <p>máx: </p> <p> {data.list[0].main.temp_max}°C </p> 
                  <p>mín: </p> <p> {data.list[0].main.temp_min}°C </p> 
                </div>
              </div> : null }
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
          </div> : null}
          <div className='c5'>
              <div className='Buscador'>
                  <input value={location} placeholder={'Buscar Ciudad.'} onChange={((e) => {setlocation(e.target.value)})} onClick={searchLocation}/>
                  <button type='submit' value={'Buscar'} onClick={searchLocation}><img src={search} alt={data.name}/></button>
              </div>
              <div className='c5-subcontainer'>
                <div>
                 {count}
                </div>
                <div>
                  {month}
                </div>
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
