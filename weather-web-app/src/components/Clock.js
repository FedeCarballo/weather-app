import React, { useState, useEffect } from 'react'

export default function Clock() {
    const [count, setcount] = useState('');
    const [month,setmonth] = useState('');

    const days=['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb' ]
    const months = ['Ene' , 'Feb' , 'Mar' , 'Abr' , 'May' , 'Jun' , 'Jul' , 'Ago' , 'Sep' , 'Oct' , 'Nov' , 'Dic']
   
    useEffect(() => {
      setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const minute = time.getMinutes();
      setcount(hour + ':' + minute )
      setmonth(days[day]+'/'+date+'/'+months[month])
    }, 1000);},[])
  
  return (
    <div>
        <p>
            {count}
        </p>
        <p>
            {month}
        </p>
    </div>
  )
}
