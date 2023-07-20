import { useMainContext } from "../../context/MainContext";
import { useWeather } from "../../hooks/useWeather";
import "./Weekly.css";

function Weekly() {
  const { weatherData, loading } = useMainContext();
  useWeather();

  return loading ? (
    <div>
      <label className="title">Daily</label>
      <div className="weekly-container">
        {weatherData.data.list.splice(0, 7).map((item, idx) => (
          <div className="daily-item" key={idx}>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="icon-small"
            />
            <label className="date">{item.dt_txt}</label>
            <label className="description">{item.weather[0].description}</label>
            <label className="min-max">
              {Math.round(item.main.temp_min)}⁰C /{" "}
              {Math.round(item.main.temp_max)}
              ⁰C
            </label>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>
      <h5>LOADİNG...</h5>
    </div>
  );
}

export default Weekly;
