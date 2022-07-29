import Cities from "../../cities.json"
import { useState, useEffect, useContext } from "react"
import WeatherContext from "../../context/WeatherContext"

function CitySearch(){
const data = useContext(WeatherContext)

    const [option, setOption] = useState(data.city)
  
        const handleChange = (e) => {
            setOption(e.target.value)
    
        }
        useEffect(() => {
            data.setCity(option);
        
        
        } , [option]
        )
   
    return (
        <div>
                <select onChange={handleChange} name="city" id="cities">
                {Cities.map((el,i)=> <option value={el.isim} key={i}>{el.isim}</option>)}
            </select>
        </div>
    )
}

export default CitySearch;