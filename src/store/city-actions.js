import { cityActions } from "./city-slice";

const convertUnixToDateString = (unixTime) => {
  const date = new Date(unixTime * 1000);
  const utcDateString = date.toUTCString();
  const dateString =
    utcDateString.slice(0, 16) + " |" + utcDateString.slice(16);

  return dateString.slice(0, 24);
};

const convertUnixToTimeString = (unixTime) => {
  const date = new Date(unixTime * 1000);
  const time = date.toLocaleTimeString();

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

export const fetchCityWeather = (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=1521bd0a1b63eeefeab43df4bec8bfce`;

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok) throw new Error("Could not fetch weather data!");

      const data = await response.json();

      const informations = [
        {
          title: "Humidity",
          text: data.current.humidity.toString() + "%",
        },
        {
          title: "Pressure",
          text: data.current.pressure.toString() + "mBar",
        },
        {
          title: "Wind",
          text: (data.current.wind_speed * 3.6).toString() + " km/h",
        },
        {
          title: "Sunrise",
          text: convertUnixToTimeString(data.current.sunrise) + "AM",
        },
        {
          title: "Sunset",
          text: convertUnixToTimeString(data.current.sunset) + "PM",
        },
        {
          title: "Daytime",
          text: convertUnixToDaytimeString(
            data.current.sunset,
            data.current.sunrise
          ),
        },
      ];

      const nextDays = [];
      for (let i = 1; i < 4; i++) {
        nextDays.push({
          weather: data.daily[i].weather[0].main,
          max: Math.round(data.daily[i].temp.max),
          min: Math.round(data.daily[i].temp.min),
          day: convertUnixToDateString(data.daily[i].dt).slice(0, 7),
        });
      }

      const weatherData = {
        city: "Michalovce, Slovakia",
        date: convertUnixToDateString(data.current.dt),
        weather: data.current.weather[0].main,
        temp: Math.round(data.current.temp),
        max: Math.round(data.daily[0].temp.max),
        min: Math.round(data.daily[0].temp.min),
        informations,
        nextDays,
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
          informations: weatherData.informations,
          nextDays: weatherData.nextDays,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
