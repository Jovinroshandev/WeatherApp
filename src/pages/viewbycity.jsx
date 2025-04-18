import axios from "axios"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import WeatherCard from "../components/WeatherCard"
import TempCard from "../components/teampcard"
import WindCard from "../components/windCard"
import { useNavigate } from "react-router-dom"
export default function ViewByLoc() {
  // Weather Functionality
  const apiKey = "18ba3283d5ba10eb781b0a84a0592212"
  const [weather, setWeather] = useState(null)
  const [Longitude, setLongitude] = useState(null)
  const [Latitude, setLatitude] = useState(null)


  useEffect(() => {


    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        setLatitude(lat)

        const lon = position.coords.longitude
        setLongitude(lon)
      }
    )



  }, [])

  useEffect(() => {
    if (Latitude !== null && Longitude !== null) {
      const fetchData = async () => {
        try {
          const cityResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&appid=${apiKey}&&units=metric`)
          setWeather(null)
          const request = `https://api.openweathermap.org/data/2.5/weather?q=${cityResponse.data.name}&appid=${apiKey}&&units=metric`
          axios.get(request)
            .then((response) => {
              setWeather(response.data)
            })
        }
        catch (error) {
          console.log(error)
        }
      }

      fetchData()
    }
  }, [Latitude])
  // Time Functionality
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);
  }, [])

  const navigate = useNavigate()
  const handleHomeBtn = () => {
    navigate('/')
  }
  return (
    <div style={{fontFamily:'"Roboto", sans-serif'}} className="flex pt-5 flex-col relative bg-gradient-to-b from-red-700 to-black h-screen">
      <div className=" flex flex-col md:flex-row pt-5 gap-4 justify-center items-center">
        <div className="flex flex-col md:flex-row  gap-5 justify-between items-center">
          <div>
          <h1 style={{fontFamily:'"Metamorphous", serif'}} className="md:text-5xl text-3xl font-bold text-white text-center">Weatherify</h1>
          <p className="mt-1 text-center text-white">Your Weather Buddy, Always Ready</p>
          </div>
          <div className="md:block flex justify-between gap-5">
          {time && <p className="bg-black md:absolute md:left-10 md:text-2xl  text-xl text-center font-medium text-white w-48 md:w-56  px-1 py-2 rounded-xl" style={{ fontFamily:'"Orbitron", sans-serif',display: time ? "block" : "none", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>{time} <i className="fa-regular fa-clock fa-spin"></i></p>}
            <button onClick={handleHomeBtn} className="bg-black md:absolute md:right-10 md:text-xl hover:bg-gray-900 hover:text-red-500 text-xs text-center font-medium w-36 text-white md:w-48  px-3 py-2 rounded-xl">Go Home <i class="fa-solid fa-house-chimney"></i></button>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col items-center gap-2">
        {weather && <p className="text-2xl mt-5 mb-5 md:mt-10 md:mb-4 md:text-2xl font-medium text-white" style={{ display: weather ? "block" : "none" }}>Today - {weather.name}</p>}
        <div className="flex md:flex-row flex-col gap-2 w-full h-full px-4 flex-grow">
          {weather &&
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -8 }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              className="bg-white hover:bg-blue-100 cursor-pointer rounded-xl py-2 mx-10 flex-1 flex-grow">
              <WindCard wind={weather.wind.speed} />
            </motion.div>
          }

          {
            weather &&
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -8 }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              className="bg-white hover:bg-blue-100 cursor-pointer rounded-xl py-2 mx-10 flex-1 flex-grow">
              <TempCard temp={weather.main.temp} />
            </motion.div>
          }
          {
            weather &&
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -8 }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}

              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              className="bg-white hover:bg-blue-100 cursor-pointer rounded-xl py-2 mx-10 flex-1 flex-grow">
              <WeatherCard weather={weather.weather[0].description} />
            </motion.div>
          }
        </div>


      </div>
    </div>
  )
}