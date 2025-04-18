import image from "../assets/weather/temp.png"
export default function TempCard(props) {
    return (
        <div className="text-center">
            <img src={image} alt={image} className="w-20 h-20 mx-auto" />
            <h2 className="text-lg font-semibold  mb-2">{props.temp} °C</h2>
        </div>
    )
}