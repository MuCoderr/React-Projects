import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { getCountry } from "./redux/features/country/countrySlice";

function App() {
  const dispatch = useDispatch();

  const { counter } = useSelector(state => state.counter);
  const { country, loading } = useSelector(state => state.country);

  loading === false ? console.log(country) : console.log("Loading...");

  useEffect(() => {
    dispatch(getCountry());
  }, []);

  return (
    <div className="App">
      <span onClick={() => dispatch(decrement())}>-</span>
      <span>{counter}</span>
      <span onClick={() => dispatch(increment())}>+</span>
    </div>
  );
}

export default App;
