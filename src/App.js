import axios from "axios"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import WeatherCard from "./components/WeatherCard"
import TempCard from "./components/teampcard"
import WindCard from "./components/windCard"

export default function App() {
  // Weather Functionality
  const apiKey = "18ba3283d5ba10eb781b0a84a0592212"
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)
  const handleInput = ((evt) => {
    setCity(evt.target.value)
  })
  const handleSubmit = (() => {
    setWeather(null)
    const request = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`
    axios.get(request)
      .then((response) => {
        setWeather(response.data)
        setError(null)
      })
      .catch((error) => {
        console.error("Error fecting data:", error)
        setError('Please Enter Correct City Name')
      })

  })
  // Time Functionality
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);
  }, [])
  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") { handleSubmit() }
  }
  return (
    <div className="flex flex-col relative bg-gradient-to-b from-blue-700 to-blue-300 h-screen">
      <h1 className="pt-2 md:pt-10 md:text-5xl text-3xl font-bold text-white text-center">Weatherify</h1>
      <div className=" flex flex-col md:flex-row pt-5 gap-4 justify-center items-center">
        {time && <p className="bg-black md:absolute md:left-10 md:text-2xl text-xl text-center font-medium text-white md:w-48  px-3 py-2 rounded-xl" style={{ display: time ? "block" : "none", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>{time} <i class="fa-regular fa-clock fa-spin"></i></p>}
        <div className="bg-white w-fit px-3 py-2 rounded-xl">
          <input className="bg-transparent w-60 md:w-72 outline-none" placeholder="Search for a City" onKeyDown={handleKeyPress} onChange={handleInput} value={city} type="text" />
          <button className="bg-blue-600 md:text-lg p-1 hover:bg-black rounded-xl text-white font-medium" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="ml-8 md:absolute md:left-[430px] md:top-[153px]  flex rounded p-1 w-fit bg-red-100 text-xs  text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

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
              initial={{y:50,opacity:0}}
              animate={{y:0,opacity:1}}
              whileHover={{y:-8}}
              transition={{
                type:"spring",
                stiffness:200,
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