import image from "../assets/weather/temp.png"
export default function TempCard(props) {
    return (
        <div className="text-center">
            <img src={image} alt={image} className="w-20 h-20 md:w-32 md:h-32 mx-auto" />
            <h2 className="text-lg md:text-xl md:font-medium font-semibold  mb-2">{props.temp} °C</h2>
        </div>
    )
}