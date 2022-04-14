import { cityActions } from "./city-slice";

export const fetchCityWeather = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=1521bd0a1b63eeefeab43df4bec8bfce`
      );

      if (!response.ok) throw new Error("Could not fetch weather data!");

      const data = await response.json();

      return data;
    };

    try {
      const weatherData = await fetchData();
      dispatch();
    } catch (error) {
      console.log(error);
    }
  };
};
