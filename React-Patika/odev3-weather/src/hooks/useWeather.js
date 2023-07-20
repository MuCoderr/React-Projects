import { useEffect } from "react";
import { useMainContext } from "../context/MainContext";
import axios from "axios";

export function useWeather() {
  const { setWeatherData, apiUrl, apiKey, city, setCity, setLoading } =
    useMainContext();
  useEffect(() => {
    axios(`${apiUrl}/forecast?q=${city}&units=metric&appid=${apiKey}`)
      .then(data => {
        if (data.status === 200) {
          setWeatherData(data);
          setLoading(true);
        } else {
          setLoading(false);
        }
      })
      .catch(e => {
        setCity(city);
      });
  }, [city, apiUrl, apiKey, setWeatherData, setCity, setLoading]);
}
