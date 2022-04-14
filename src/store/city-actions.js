import { cityActions } from "./city-slice";

const convertUnixToDateString = (unixTime) => {
  const date = new Date(unixTime * 1000);
  const dateString = date.toUTCString();

  return dateString.slice(0, 22);
};

const convertUnixToTimeString = (unixTime) => {
  const date = new Date(unixTime * 1000);
  const time = date.toLocaleTimeString;

  return time.slice(0, 4);
};

const convertUnixToDaytimeString = (sunset, sunrise) => {
  const daytimeInSeconds = sunset - sunrise;
  const daytimeHours = Math.floor(daytimeInSeconds / 3600);

  const daytimeMinutes = Math.round(
    (daytimeInSeconds / 3600 - daytimeHours) * 60
  );

  return `${daytimeHours}h ${daytimeMinutes}m`;
};

export const fetchCityWeather = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=48.7543&lon=21.9195&units=metric&exclude=hourly,minutely&appid=1521bd0a1b63eeefeab43df4bec8bfce`
      );

      if (!response.ok) throw new Error("Could not fetch weather data!");

      const data = await response.json();

      const weatherData = {
        city: "Michalovce, Slovakia",
        date: convertUnixToDateString(data.current.dt),
        weather: data.current.weather[0].main,
        temp: Math.round(data.current.temp),
        max: Math.round(data.daily[0].temp.max),
        min: Math.round(data.daily[0].temp.min),
        humidity: data.current.humidity.toString() + "%",
        pressure: data.current.pressure.toString() + "mBar",
        wind: (data.current.wind_speed * 3.6).toString() + " km/h",
        sunrise: convertUnixToTimeString(data.current.sunrise) + "AM",
        sunset: convertUnixToTimeString(data.current.sunset) + "PM",
        daytime: convertUnixToDaytimeString(
          data.current.sunset,
          data.current.sunrise
        ),
      };

      return weatherData;
    };

    try {
      const weatherData = await fetchData();
      dispatch(
        cityActions.replaceCity({
          city: weatherData.city,
          date: weatherData.date,
          weather: weatherData.weather,
          temp: weatherData.temp,
          max: weatherData.max,
          min: weatherData.min,
          humidity: weatherData.humidity,
          pressure: weatherData.pressure,
          wind: weatherData.wind,
          sunrise: weatherData.sunrise,
          sunset: weatherData.sunset,
          daytime: weatherData.daytime,
          nextDays: weatherData.nextDays,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
