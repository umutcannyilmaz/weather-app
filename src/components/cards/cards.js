
import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
import "./cards.css"

function Cards (){

    const data = useContext(WeatherContext)
    
   
    return (
        <div className="row">
            {!data.loading  ? "Loading.." : <>
                <div className="card">
                    <h1>🔴LIVE  </h1>
                    <hr></hr>
                    <img src={`http://openweathermap.org/img/wn/${data.img}@2x.png `} />
                    <h1>{`${Math.round(data.temp)} °C`}</h1>
                    <h1>{data.city}</h1>
                    

                </div>
               
                    {data.otherdays.map((el,i)=> ( <div key={i} className="card">
                    <h1> {data.time[i] && new Date(data.time[i].slice(0,10).replace(/-/gi,",")).toLocaleTimeString("tr",{weekday:"long"}).slice(0,-8)}</h1>
                    
                    <hr></hr>
                   <img src={ `http://openweathermap.org/img/wn/${data.otherimgs[i]}@2x.png `} /> 
                    
                    <h1>{`${(Math.round(el.main.temp))} °C`}</h1>
                    <h1>{data.city}</h1>

                </div>
                
                )
                
                
                )}
             

            </>}
        </div>
    )
}

export default Cards;