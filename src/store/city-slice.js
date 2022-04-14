import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: {
    city: "",
    date: "",
    weather: "",
    temp: 0,
    max: 0,
    min: 0,
    humidity: "",
    pressure: "",
    wind: "",
    sunrise: "",
    sunset: "",
    daytime: "",
    nextDays: [],
  },
  reducers: {
    replaceCity(state, action) {
      state.city = action.payload.city;
      state.date = action.payload.date;
      state.weather = action.payload.weather;
      state.temp = action.payload.temp;
      state.max = action.payload.max;
      state.min = action.payload.min;
      state.humidity = action.payload.humidity;
      state.pressure = action.payload.pressure;
      state.wind = action.payload.wind;
      state.sunrise = action.payload.sunrise;
      state.sunset = action.payload.sunset;
      state.daytime = action.payload.daytime;
      state.nextDays = action.payload.nextDays;
    },
  },
});

export const cityActions = citySlice.actions;

export default citySlice;
