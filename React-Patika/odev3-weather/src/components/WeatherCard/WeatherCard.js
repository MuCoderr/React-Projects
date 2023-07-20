import { useMainContext } from "../../context/MainContext";
import { useWeather } from "../../hooks/useWeather";
import "./WeatherCard.css";

const WeatherCard = () => {
  const { weatherData, loading } = useMainContext();
  useWeather();

  return loading ? (
    <div className="weathercard-container">
      <div className="top">
        <div>
          <p className="city">
            {weatherData.data.city.name},{weatherData.data.city.country}
          </p>
          <p className="weather-description">
            {weatherData.data.list[0].weather[0].main}
          </p>
          <p className="card-date">{weatherData.data.list[0].dt_txt}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.data.list[0].weather[0].icon}@2x.png`}
          alt="weather icon"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">
          {Math.round(weatherData.data.list[0].main.temp)}⁰C
        </p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(weatherData.data.list[0].main.feels_like)}⁰C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {Math.round(weatherData.data.list[0].wind.speed)} m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {weatherData.data.list[0].main.humidity}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {weatherData.data.list[0].main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="weathercard-container top">
      <h1>LOADİNG...</h1>
    </div>
  );
};

export default WeatherCard;
