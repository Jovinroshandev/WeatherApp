

export const getWeatherImage = (description) => {
    const desc = description.toLowerCase();
  
    if (desc.includes("clear")) return "clear.png";
    if (desc.includes("cloud")) return "cloudy.png";
    if (desc.includes("rain") && !desc.includes("thunder")) return "rain.png";
    if (desc.includes("thunder")) return "thunderstorm.png";
    if (desc.includes("snow")) return "snow.png";
    if (desc.includes("sleet") || desc.includes("freezing")) return "snow.png";
    if (desc.includes("mist") || desc.includes("fog") || desc.includes("haze")) return "fog.png";
    if (desc.includes("dust") || desc.includes("sand") || desc.includes("smoke")) return "fog.png";
    if (desc.includes("tornado")) return "thunderstorm.png";
  
    return "default.png"; // fallback image
  };
  