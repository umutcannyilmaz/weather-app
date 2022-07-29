import { useContext } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {


    const [city, setCity] = useState("Adana")
    const apiKey = `3fb61227e5fc1de5c984470d56e8d2a4`
    const [data1, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [img, setImg] = useState()
    const [temp, setTemp] = useState("")
    const [otherdays, setOtherDays] = useState([])
    const [otherimgs, setOtherImgs] = useState(["10d"])
    const [time, setTime] = useState()


    useEffect(() => {
        const axiosData = async () => {
            try {

                const { data: response } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=tr&appid=${apiKey}&units=metric`);
                setData(response);
                console.log(response)
                setImg(response.list[0].weather[0].icon)
                setTemp(response.list[0].main.temp)
                setOtherDays(response.list.filter((el) => el.dt_txt.includes("12:00:00")))
                setOtherImgs(otherdays.map((el) => el.weather[0].icon));
                setTime(otherdays.map((el) => el.dt_txt))
            }

            catch (error) {
                console.error(error)
            }
            setLoading(true);
        };

        axiosData();

        setData(data1)
        setImg(img)
        setOtherDays(otherdays)
        setOtherImgs(otherimgs)

    }, [city]);

    const values = {
        city,
        setCity,
        data1,
        setData,
        loading,
        setLoading,
        img,
        setImg,
        temp,
        setTemp,
        otherdays,
        setOtherDays,
        otherimgs,
        setOtherImgs,
        time,
        setTime
    }


    return (<WeatherContext.Provider value={values}>
        {children}

    </WeatherContext.Provider>)

}

export default WeatherContext;