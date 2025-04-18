import image from "../assets/weather/wind.png"
export default function WindCard(props) {
    return (
        <div className="text-center">
            <img src={image} alt={image} className=" w-20 h-20 mx-auto" />
            <h2 className="text-lg font-semibold  mb-2">{props.wind} m/s</h2>
        </div>
    )
}