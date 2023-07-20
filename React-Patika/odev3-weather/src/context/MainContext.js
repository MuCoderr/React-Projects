import { createContext, useState, useContext } from "react";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [city, setCity] = useState("İstanbul");
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  const values = {
    city,
    setCity,
    weatherData,
    setWeatherData,
    apiUrl: "https://api.openweathermap.org/data/2.5/",
    apiKey: "4b9003159c054e79907ee9aedd595e87",
    loading,
    setLoading,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
