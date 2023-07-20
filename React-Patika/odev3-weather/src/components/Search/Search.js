import { useMainContext } from "../../context/MainContext";
import "./Search.css";

function Search() {
  const { setCity } = useMainContext();

  const changeCity = e => {
    setTimeout(() => {
      if (e.target.value === "") {
        setCity("İstanbul");
      } else {
        setCity(e.target.value);
      }
    }, 1000);
  };

  return (
    <div className="search-container">
      <svg
        className="searchbar-icon"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
        ></path>
        <path
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M338.29 338.29L448 448"
        ></path>
      </svg>
      <input
        type="text"
        placeholder="Enter city name"
        onChange={changeCity}
        className="search-input"
      />
    </div>
  );
}

export default Search;
