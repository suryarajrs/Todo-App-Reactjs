import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../api/weatherAPI';

const WeatherCard = ({ task }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (task.isOutdoor) {
      fetchWeather(task.location).then((data) => setWeather(data));
    }
  }, [task]);

  if (!weather) {
    return null;
  }

  return (
    <div className="weather-card">
      <h5>Weather: {weather.main.temp}°C</h5>
      <p>{weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
