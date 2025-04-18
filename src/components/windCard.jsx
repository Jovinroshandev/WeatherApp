import image from "../assets/weather/wind.png"
export default function WindCard(props) {
    return (
        <div className="text-center">
            <img src={image} alt={image} className=" w-20 h-20 md:w-32 md:h-32 mx-auto" />
            <h2 className="text-lg md:text-xl font-semibold md:font-medium  mb-2">{props.wind} m/s</h2>
        </div>
    )
}